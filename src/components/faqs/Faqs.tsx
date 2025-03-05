import Header from "../custom/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqs = [
    { trigger: "What do I get exactly?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
    { trigger: "What do I get exactly?7", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nunc sem. Duis bibendum turpis id accumsan commodo. Pellentesque nulla." },
];

export default function Faqs() {
    return (
        <div className="w-full md:w-4/5 h-auto flex flex-col items-center justify-center gap-10 md:gap-6 mt-52" id="Faqs">
            <Header
                title="Frequently Asked Questions"
                description="Have another question? Contact me on Twitter or by email" />
            <Accordion
                type="single"
                collapsible
                className="w-full md:w-2/3 text-foreground">
                {faqs && faqs.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={item.trigger}>
                        <AccordionTrigger className="cursor-pointer">{item.trigger}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
