import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Notice() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const autoPlayInterval = 3000; // 3 seconds

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Loop through 5 items
        }, autoPlayInterval);

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-3 border border-green-300">
                            <p>{index}adsfasdfasdfbjhbbdfasdf</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious onClick={() => setCurrentIndex((currentIndex - 1 + 5) % 5)} />
            <CarouselNext onClick={() => setCurrentIndex((currentIndex + 1) % 5)} /> */}
        </Carousel>
    );
}
