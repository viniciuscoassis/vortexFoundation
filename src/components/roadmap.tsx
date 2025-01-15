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
      title: "Q1 2025",
      description: "AI Agent Launch",
      completed: false,
      tasks: [
        {
          name: "Launch of Vortex token",
          completed: true,
        },
        {
          name: "Launch of Vortex AI NFT Assistant",
          completed: false,
        },
        {
          name: "Equalizer Full Whitelist Integration",
          completed: false,
        },
        {
          name: "First AI-Curated NFT Collection Launch",
          completed: false,
        },
        {
          name: "Oracles Migration to Sonic Chain",
          completed: false,
        },
      ],
    },
    {
      title: "Q2 2025",
      description: "Market Integration",
      completed: false,
      tasks: [
        {
          name: "$VORTEX Listed on WAGMI",
          completed: false,
        },
        {
          name: "Automated NFT Trading Bot Beta",
          completed: false,
        },
        {
          name: "First Automated NFT Sales",
          completed: false,
        },
        {
          name: "AI Portfolio Analytics Dashboard",
          completed: false,
        },
        {
          name: "First Airdrop to Oracles Holders",
          completed: false,
        },
      ],
    },
    {
      title: "Q3 2025",
      description: "Ecosystem Growth",
      completed: false,
      tasks: [
        {
          name: "Multi-Chain AI Trading Support",
          completed: false,
        },
        {
          name: "Advanced Market Prediction Features",
          completed: false,
        },
        {
          name: "NFT Rarity & Valuation AI Model",
          completed: false,
        },
        {
          name: "Community Governance Launch",
          completed: false,
        },
      ],
    },
    {
      title: "Q4 2025",
      description: "Platform Evolution",
      completed: false,
      tasks: [
        {
          name: "AI-Powered NFT Creation Tools",
          completed: false,
        },
        {
          name: "Cross-Chain Portfolio Management",
          completed: false,
        },
        {
          name: "Advanced Trading Strategies Integration",
          completed: false,
        },
        {
          name: "Expansion of Vortex Ecosystem",
          completed: false,
        },
      ],
    },
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "Q1 2025": return <Bot className="h-8 w-8 text-primary" />;
      case "Q2 2025": return <BarChart3 className="h-8 w-8 text-primary" />;
      case "Q3 2025": return <Network className="h-8 w-8 text-primary" />;
      case "Q4 2025": return <Brain className="h-8 w-8 text-primary" />;
      default: return null;
    }
  };

  return (
    <section className="mx-auto py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Our Journey: 2025 Roadmap
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {roadmapCards.map((card, index) => {
          const completedTasks = card.tasks.filter(task => task.completed).length;
          const progress = (completedTasks / card.tasks.length) * 100;

          return (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                {getIcon(card.title)}
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">{card.title}</CardTitle>
                  <CardDescription className="text-sm">{card.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {card.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${task.completed ? "text-green-500" : "text-gray-300"}`} />
                      <span className={`${task.completed ? "line-through text-gray-500" : "text-foreground"}`}>
                        {task.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Progress value={progress} className="w-full" />
                <span className="text-xs sm:text-sm font-medium">
                  {progress.toFixed(0)}% Complete
                </span>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
