import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DiscoverCard({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div>
          <img src={img} alt="" className="size-32 lg:size-[180px]" />
        </div>
        <CardTitle className="text-xl sm:text-3xl text-primary font-thin tracking-wider cursor-pointer">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base font-inter">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>See More</Button>
      </CardFooter>
    </Card>
  );
}
