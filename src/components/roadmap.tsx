import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Switch } from "./ui/switch";

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
          completed: false,
        },
        {
          name: "Oracles artists collab",
          completed: false,
        },
      ],
    },
    {
      title: "Q3 2024",
      description: "Descentralized app arc",
      completed: false,
      tasks: [
        {
          name: "$TEX listed on CEX",
          completed: false,
        },
        {
          name: "MVP available of Oracles marketplace",
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
          name: "Constant revenue shares for Oracles holders",
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
          name: "Expansion of the marketplace",
          completed: false,
        },
      ],
    },
  ];

  return (
    <>
      <section className="m-4 grid grid-cols-12 bg-background mb-24">
        <div className=" flex justify-center items-center col-start-4 col-span-6 ">
          <h1
            className="text-4xl font-bold text-secondary-foreground my-10
        "
          >
            Roadmap
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 col-span-10 col-start-2 ">
          {roadmapCards.map((card, index) => (
            <Card
              key={index}
              className="md:col-span-1 bg-card min-h-96 flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent
                className="flex flex-col h-full justify-between
            "
              >
                <ul className="grid gap-4 text-xl">
                  {card.tasks.map((task, index) => (
                    <li key={index} className="flex items-center">
                      <Check
                        className={`h-6 w-6 mr-2 ${
                          task.completed ? "flex" : "hidden"
                        }`}
                      />
                      <span className={task.completed ? "line-through" : ""}>
                        {task.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter
                className="p-4 flex justify-between 
            "
              >
                <div className="flex items-center justify-between">
                  <Switch defaultChecked={card.completed} disabled />
                  <span className="text-lg">
                    {card.completed ? "Completed" : "In progress..."}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
