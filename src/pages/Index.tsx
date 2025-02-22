
import { motion } from "framer-motion";
import { ShoppingBag, DollarSign, ChartBar } from "lucide-react";
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
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/47ea5391-2909-447b-a897-12e521abd611.png"
                  alt="Chytrý nákupní seznam"
                  className="h-24 md:h-32 w-auto"
                />
              </div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-primary/10">
                Ušetřete na nákupech
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Chytrý nákupní seznam
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Porovnejte ceny napříč obchody a ušetřete až 50 % na vašich nákupech. Už nikdy neplaťte víc, než musíte.
              </p>
              <Button size="lg" className="rounded-full animate-float">
                Začněte šetřit ještě dnes
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="feature-card p-6">
              <ShoppingBag className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Porovnání obchodů</h3>
              <p className="text-muted-foreground">
                Okamžitě najděte nejlepší ceny v různých obchodech ve vašem okolí.
              </p>
            </Card>
            <Card className="feature-card p-6">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Úspora peněz</h3>
              <p className="text-muted-foreground">
                Ušetřete až 50 % na vašich nákupech díky nalezení nejlepších nabídek.
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
              Porovnejte ceny ve všech hlavních obchodech
            </h2>
            <p className="text-lg text-muted-foreground">
              Získejte aktuální srovnání cen z vašich oblíbených obchodů
            </p>
          </div>
          <div className="relative">
            <Card className="p-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Chytré sledování cen
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <ChartBar className="w-5 h-5 text-primary" />
                      <span>Aktualizace cen v reálném čase</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                  {/* Placeholder for comparison chart/visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Interaktivní graf porovnání cen
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
              Připraveni začít šetřit?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Připojte se k tisícům chytrých nakupujících, kteří šetří každý den
            </p>
            <Button size="lg" className="rounded-full">
              Začít nyní
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
