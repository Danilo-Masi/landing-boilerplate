import AppContainer from "@/components/custom/AppContainer";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { Link } from "react-router-dom";

const terms = [
  { title: "title 1", paragraph: "Curabitur aliquam ac arcu ac scelerisque. In quis felis sollicitudin, viverra elit scelerisque, blandit sapien. Aenean vitae sodales velit. Donec tristique finibus nulla, id vulputate risus suscipit eu. Nullam venenatis odio at nulla accumsan, a." },
  { title: "title 2", paragraph: "freestar Nunc erat ex, eleifend ac aliquam ac, semper ac neque. Praesent ornare vel magna ut pretium. Sed in massa suscipit, tempus urna id, condimentum turpis. Nam vel augue velit. Nunc id posuere orci, quis fermentum est. Nulla tempor, quam vel ullamcorper bibendum, dui dui ultrices ante, luctus efficitur magna mauris vitae magna. Curabitur purus nisi, placerat nec semper ac, bibendum sit amet massa. Ut suscipit tempor odio. Praesent viverra, sem dictum dapibus aliquet, nisi eros vulputate mi, non imperdiet orci." },
  { title: "title 3", paragraph: "Curabitur aliquam ac arcu ac scelerisque. In quis felis sollicitudin, viverra elit scelerisque, blandit sapien. Aenean vitae sodales velit. Donec tristique finibus nulla, id vulputate risus suscipit eu. Nullam venenatis odio at nulla accumsan, a." },
  { title: "title 4", paragraph: "freestar Nunc erat ex, eleifend ac aliquam ac, semper ac neque. Praesent ornare vel magna ut pretium. Sed in massa suscipit, tempus urna id, condimentum turpis. Nam vel augue velit. Nunc id posuere orci, quis fermentum est. Nulla tempor, quam vel ullamcorper bibendum, dui dui ultrices ante, luctus efficitur magna mauris vitae magna. Curabitur purus nisi, placerat nec semper ac, bibendum sit amet massa. Ut suscipit tempor odio. Praesent viverra, sem dictum dapibus aliquet, nisi eros vulputate mi, non imperdiet orci." },
  { title: "title 5", paragraph: "Curabitur aliquam ac arcu ac scelerisque. In quis felis sollicitudin, viverra elit scelerisque, blandit sapien. Aenean vitae sodales velit. Donec tristique finibus nulla, id vulputate risus suscipit eu. Nullam venenatis odio at nulla accumsan, a." },
];

export default function Privacypage() {
  return (
    <AppContainer>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-6 my-10">
        <Button className="bg-zinc-700 hover:bg-zinc-600">
          <Link to="/" className="flex items-center gap-x-2">
            <ArrowLeftFromLine />
            Go back
          </Link>
        </Button>
        <h1 className="text-3xl font-semibold text-zinc-50">Privacy policy</h1>
      </div>
      <div className="w-full md:w-1/2 min-h-svh flex flex-col gap-6 mb-10">
        {terms.map((item, index) => (
          <div className="flex flex-col gap-y-3" key={index}>
            <h1 className="text-lg font-semibold text-zinc-100">{item.title}</h1>
            <p className="text-zinc-300">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </AppContainer>
  );
}
