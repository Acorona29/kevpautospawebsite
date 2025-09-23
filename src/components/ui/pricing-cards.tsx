import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StarBorder } from "@/components/ui/star-border";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40 relative bg-black min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat min-h-full"
        style={{
          backgroundImage: `url('/src/lib/jan-vlacuha-U4IaoKF5aj4-unsplash.jpg')`
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 min-h-full" />
      <div className="container mx-auto px-4">
        <div className="flex text-center justify-center items-center gap-4 flex-col relative z-10">
          <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-normal max-w-xl text-center font-medium text-white">
              Professional Auto Detailing Packages
            </h2>
            <p className="text-lg leading-relaxed tracking-normal text-gray-200 max-w-xl text-center font-normal">
              Choose the perfect detailing package for your vehicle's needs and budget.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <StarBorder 
              as="div" 
              color="#3b82f6" 
              speed="8s"
              className="w-full"
            >
              <Card className="w-full rounded-md border-0 shadow-lg m-0 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/src/lib/7359334a-84df-4f0d-a6c1-bf4096d70a2a.png')`
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <CardHeader 
                className="relative z-10"
              >
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-medium text-white">
                    Basic Detail
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-200 font-normal">
                  Perfect for regular maintenance and keeping your vehicle clean and fresh.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$50</span>
                      <span className="text-sm text-gray-200 font-normal">Sedan</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$65</span>
                      <span className="text-sm text-gray-200 font-normal">SUV</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$70</span>
                      <span className="text-sm text-gray-200 font-normal">Truck</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Exterior Wash</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Complete hand wash with premium soap and drying.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Vacuum Interior</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Thorough vacuuming of seats, carpets, and floor mats.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Window Shine</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Crystal clear windows inside and out.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Tire and Rim Care</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Professional tire cleaning and rim detailing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4 border-white/30 text-white hover:bg-white/10">
                    <a href="tel:760-844-9066" className="flex items-center gap-4">
                      Book Now <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            </StarBorder>
            <StarBorder 
              as="div" 
              color="#fbbf24" 
              speed="6s"
              className="w-full"
            >
              <Card className="w-full shadow-2xl rounded-md border-0 relative m-0 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/src/lib/7359334a-84df-4f0d-a6c1-bf4096d70a2a.png')`
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <CardHeader 
                className="relative z-10"
              >
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-medium text-white">
                    Full Detail
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-200 font-normal">
                  Complete interior and exterior detailing for the ultimate clean and protection.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$50</span>
                      <span className="text-sm text-gray-200 font-normal">Sedan</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$65</span>
                      <span className="text-sm text-gray-200 font-normal">SUV</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$70</span>
                      <span className="text-sm text-gray-200 font-normal">Truck</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Everything in Basic Detail</p>
                        <p className="text-gray-200 text-sm font-normal">
                          All basic detail services plus additional treatments.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Interior Deep Clean</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Door panels, jambs, crevices & dashboard cleaning.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Floor Mat Wash</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Thorough cleaning and washing of all floor mats.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4 border-white/30 text-white hover:bg-white/10">
                    <a href="tel:760-844-9066" className="flex items-center gap-4">
                      Book Now <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
              </Card>
            </StarBorder>
            <StarBorder 
              as="div" 
              color="#8b5cf6" 
              speed="10s"
              className="w-full"
            >
              <Card className="w-full rounded-md border-0 shadow-lg m-0 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/src/lib/7359334a-84df-4f0d-a6c1-bf4096d70a2a.png')`
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <CardHeader 
                className="relative z-10"
              >
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-medium text-white">
                    Premium Detail
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-200 font-normal">
                  The ultimate detailing experience with paint correction and ceramic coating.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$100</span>
                      <span className="text-sm text-gray-200 font-normal">Sedan</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$125</span>
                      <span className="text-sm text-gray-200 font-normal">SUV</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-2xl text-white font-medium">$150</span>
                      <span className="text-sm text-gray-200 font-normal">Truck</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Everything in Full Detail</p>
                        <p className="text-gray-200 text-sm font-normal">
                          All full detail services plus premium upgrades.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Engine Bay Detail</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Professional engine bay cleaning and detailing.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Clay Treatment & Paint Protection</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Clay bar treatment and protective paint coating.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-green-600" />
                      <div className="flex flex-col">
                        <p className="text-white font-medium">Bug & Salt Removal</p>
                        <p className="text-gray-200 text-sm font-normal">
                          Specialized removal of bugs, salt, and road contaminants.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4 border-white/30 text-white hover:bg-white/10">
                    <a href="tel:760-844-9066" className="flex items-center gap-4">
                      Book Now <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };