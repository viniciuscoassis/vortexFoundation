import { Check, Calendar, Rocket, Zap, Target, Bot, BarChart3, Network, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";

export default function Roadmap() {
  const roadmapCards = [
    {
      title: "Phase 1",
      description: "Migration & Integration",
      completed: false,
      tasks: [
        {
          name: "$VORTEX Successfully launch",
          completed: true,
        },
        {
          name: "Equalizer Full Whitelist Integration",
          completed: true,
        },
        {
          name: "Migrate Oracles to Sonic Chain",
          completed: false,
        },
        {
          name: "WAGMI LP Integration (1M Target)",
          completed: false,
        },
        {
          name: "Implement TEX Claim Mechanism",
          completed: false,
        },
      ],
    },
    {
      title: "Phase 2",
      description: "ArtfAI NFT Assistant MVP",
      completed: false,
      tasks: [
        {
          name: "Launch Vortex AI NFT Assistant",
          completed: false,
        },
        {
          name: "Oracles Revenue Share Implementation",
          completed: false,
        },
        {
          name: "Basic NFT Collection Analysis",
          completed: false,
        },
        {
          name: "Twitter AI Agent Integration",
          completed: false,
        },
        {
          name: "Telegram AI Agent Deployment",
          completed: false,
        },
    
      ],
    },
    {
      title: "Phase 3",
      description: "Advanced AI Features",
      completed: false,
      tasks: [
        {
          name: "First community collection minted with Vortex AI",
          completed: false,
        },
        {
          name: "Creator Dashboard Launch",
          completed: false,
        },
        {
          name: "{REDACTED} Project minted with Vortex AI",
          completed: false,
        },
        {
          name: "Trait Rarity Insights",
          completed: false,
        },
        {
          name: "Collection Performance Metrics",
          completed: false,
        },
      ],
    },
    {
      title: "Phase 4",
      description: "NFT Ecosystem Expansion",
      completed: false,
      tasks: [
        {
          name: "Multi-chain Collection Support",
          completed: false,
        },
        {
          name: "AI-Powered Minting Optimization",
          completed: false,
        },
        {
          name: "Custom Trading Strategies",
          completed: false,
        },
        {
          name: "Community Governance Integration",
          completed: false,
        },
      ],
    }
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "Phase 1": return <Target className="h-8 w-8 text-primary" />;
      case "Phase 2": return <Brain className="h-8 w-8 text-primary" />;
      case "Phase 3": return <Bot className="h-8 w-8 text-primary" />;
      case "Phase 4": return <Rocket className="h-8 w-8 text-primary" />;
      default: return null;
    }
  };

  return (
    <section className="mx-auto py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Project Roadmap
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {roadmapCards.map((card, index) => {
          const completedTasks = card.tasks.filter(task => task.completed).length;
          const progress = (completedTasks / card.tasks.length) * 100;

          return (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4">
                {getIcon(card.title)}
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">{card.title}</CardTitle>
                  <CardDescription className="text-sm">{card.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {card.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${task.completed ? "text-green-500" : "text-gray-300"}`} />
                      <span className={`${task.completed ? "line-through text-gray-500" : "text-foreground"}`}>
                        {task.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="w-full space-y-2">
                  <Progress value={progress} className="w-full" />
                  <span className="text-xs sm:text-sm font-medium">
                    {progress.toFixed(0)}% Complete
                  </span>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
