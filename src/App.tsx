import { useState } from 'react';
import type { Screen, Attempt } from './types';
import { GOALS } from './data';
import { analyzeReasoning } from './aiService';
import { EntryScreen } from './screens/EntryScreen';
import { LandingPage } from './screens/LandingPage';
import { GoalSelection } from './screens/GoalSelection';
import { SkillProfile } from './screens/SkillProfile';
import { Diagnostic } from './screens/Diagnostic';
import { ReasoningAnalysis } from './screens/ReasoningAnalysis';
import { Reassessment } from './screens/Reassessment';
import { UpdatedProfile } from './screens/UpdatedProfile';

function App() {
  const [screen, setScreen] = useState<Screen>('entry');
  const [selectedGoalId, setSelectedGoalId] = useState('java-backend');
  const [attempt1, setAttempt1] = useState<Attempt | null>(null);
  const [attempt2, setAttempt2] = useState<Attempt | null>(null);

  const goal = GOALS.find((g) => g.id === selectedGoalId) ?? GOALS[0];

  const handleSubmitAttempt = (answer: string, reasoning: string) => {
    const analysis = analyzeReasoning(answer, reasoning);
    const attempt: Attempt = { answer, reasoning, analysis };

    if (!attempt1) {
      setAttempt1(attempt);
      setScreen('analysis');
    } else {
      setAttempt2(attempt);
      setScreen('reassessment');
    }
  };

  const renderScreen = () => {
    switch (screen) {
      case 'entry':
        return <EntryScreen onEnter={() => setScreen('landing')} />;

      case 'landing':
        return <LandingPage onStart={() => setScreen('goal')} />;

      case 'goal':
        return (
          <GoalSelection
            selectedGoalId={selectedGoalId}
            onSelect={setSelectedGoalId}
            onContinue={() => setScreen('profile')}
          />
        );

      case 'profile':
        return <SkillProfile goal={goal} onStart={() => setScreen('diagnostic')} />;

      case 'diagnostic':
        return (
          <Diagnostic
            attemptNumber={1}
            onSubmit={handleSubmitAttempt}
          />
        );

      case 'analysis':
        if (!attempt1) return null;
        return (
          <ReasoningAnalysis
            analysis={attempt1.analysis}
            showHint={false}
            continueLabel="SEE TARGETED HINT"
            onContinue={() => setScreen('hint')}
          />
        );

      case 'hint':
        if (!attempt1) return null;
        return (
          <ReasoningAnalysis
            analysis={attempt1.analysis}
            showHint={true}
            continueLabel="RETRY"
            onContinue={() => setScreen('retry')}
          />
        );

      case 'retry':
        return (
          <Diagnostic
            attemptNumber={2}
            previousAnswer={attempt1?.answer}
            previousReasoning={attempt1?.reasoning}
            onSubmit={handleSubmitAttempt}
          />
        );

      case 'reassessment':
        if (!attempt1 || !attempt2) return null;
        return (
          <Reassessment
            attempt1={attempt1}
            attempt2={attempt2}
            onViewProfile={() => setScreen('updated')}
          />
        );

      case 'updated':
        return (
          <UpdatedProfile
            goal={goal}
            nextConcept={attempt2?.analysis.nextConcept ?? 'Dynamic Method Dispatch'}
          />
        );

      default:
        return null;
    }
  };

  return <div className="min-h-screen">{renderScreen()}</div>;
}

export default App;
