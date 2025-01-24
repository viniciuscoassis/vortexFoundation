import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, BarChart3, ArrowRightLeft, Twitter, Send } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-center text-transparent bg-gradient-to-r from-orange-500 to-blue-600">
              Vortex AI
            </h1> */}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
          Vortex AI{" "}
        </h1>
        <h2 className="text-3xl font-bold text-center mb-12">
          Revolutionizing AI-Powered Trading and Social Media
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* NFT Trading Agent Card */}
          <Card className="bg-gradient-to-br from-orange-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                NFT Trading Agent
              </CardTitle>
              <CardDescription className="text-orange-100">
                Advanced AI for NFT market analysis and trading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Real-time floor price analysis
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRightLeft className="w-5 h-5" />
                  Automated buying and selling
                </li>
                <li>Cross-platform market monitoring</li>
                <li>Trend prediction and alerts</li>
                <li>Portfolio optimization suggestions</li>
              </ul>
            </CardContent>
          </Card>

          {/* Twitter Agent Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Twitter className="w-6 h-6" />
                Twitter Agent
              </CardTitle>
              <CardDescription>Complex personality system with dynamic interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Multi-agent personality deployment</li>
                <li>Advanced RAG for contextual awareness</li>
                <li>PDF and link content analysis</li>
                <li>Audio transcription and video processing</li>
                <li>Image analysis and description</li>
              </ul>
            </CardContent>
          </Card>

          {/* Telegram Agent Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-6 h-6" />
                Telegram Agent
              </CardTitle>
              <CardDescription>
                Seamless integration with Telegram
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Real-time messaging and responses</li>
                <li>Media processing capabilities</li>
                <li>Conversation summarization</li>
                <li>Integration with NFT trading insights</li>
                <li>Customizable alert systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Powered by Advanced AI Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Multi-Agent Architecture
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Character System
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Memory Management
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Flexible Model Support
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              Cloud-based Inference
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
