import { Check, Calendar, Rocket, Zap, Target } from "lucide-react";
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
      title: "Q1 2024",
      description: "The beginning of the journey",
      completed: true,
      tasks: [
        {
          name: "Launch of the Vortex foundation",
          completed: true,
        },
        {
          name: "Start of the Oracle collection",
          completed: true,
        },
      ],
    },
    {
      title: "Q2 2024",
      description: "Vortex foundation",
      completed: false,
      tasks: [
        {
          name: "Vortex foundation token fair launched $TEX",
          completed: true,
        },
        {
          name: "Release website",
          completed: true,
        },
        {
          name: "$TEX burning events",
          completed: false,
        },
        {
          name: "$TEX verified on Equalizer",
          completed: true,
        },
        {
          name: "Oracles artists collab",
          completed: false,
        },
      ],
    },
    {
      title: "Q3 2024",
      description: "Burn Races 🔥",
      completed: false,
      tasks: [
        {
          name: "$TEX listed on CEX",
          completed: false,
        },
        {
          name: "MVP available of Burn Races",
          completed: false,
        },
        {
          name: "First $TEX burning event using dApp fees",
          completed: false,
        },
        {
          name: "Airdrops for Oracles holders",
          completed: false,
        },
        {
          name: "Revenue shares for Oracles holders",
          completed: false,
        },
      ],
    },
    {
      title: "Q4 2024",
      description: "The journey continues",
      completed: false,
      tasks: [
        {
          name: "Expansion of the Vortex foundation",
          completed: false,
        },
        {
          name: "Expansion of new dApps",
          completed: false,
        },
      ],
    },
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "Q1 2024": return <Calendar className="h-8 w-8 text-primary" />;
      case "Q2 2024": return <Rocket className="h-8 w-8 text-primary" />;
      case "Q3 2024": return <Zap className="h-8 w-8 text-primary" />;
      case "Q4 2024": return <Target className="h-8 w-8 text-primary" />;
      default: return null;
    }
  };

  return (
    <section className="mx-auto py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Our Journey: 2024 Roadmap
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
