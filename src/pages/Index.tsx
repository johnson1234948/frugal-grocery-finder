
import { motion } from "framer-motion";
import { ShoppingBag, DollarSign, List, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
                Save Money on Groceries
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Find the Best Deals Across All Stores
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Compare prices across multiple stores and save up to 50% on your grocery shopping. Never overpay again.
              </p>
              <Button size="lg" className="rounded-full animate-float">
                Start Saving Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card p-6">
              <ShoppingBag className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compare Stores</h3>
              <p className="text-muted-foreground">
                Find the best prices across multiple stores in your area instantly.
              </p>
            </Card>
            <Card className="feature-card p-6">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Money</h3>
              <p className="text-muted-foreground">
                Save up to 50% on your grocery shopping by finding the best deals.
              </p>
            </Card>
            <Card className="feature-card p-6">
              <List className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Lists</h3>
              <p className="text-muted-foreground">
                Create and manage shopping lists that automatically find the best deals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Comparison Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Prices Across All Major Stores
            </h2>
            <p className="text-lg text-muted-foreground">
              Get real-time price comparisons from your favorite stores
            </p>
          </div>
          <div className="relative">
            <Card className="p-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Smart Price Tracking
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <ChartBar className="w-5 h-5 text-primary" />
                      <span>Real-time price updates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBar className="w-5 h-5 text-primary" />
                      <span>Historical price trends</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ChartBar className="w-5 h-5 text-primary" />
                      <span>Price drop alerts</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                  {/* Placeholder for comparison chart/visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Interactive Price Comparison Chart
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="max-w-4xl mx-auto text-center p-12 feature-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Saving?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of smart shoppers who save money every day
            </p>
            <Button size="lg" className="rounded-full">
              Get Started Now
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
