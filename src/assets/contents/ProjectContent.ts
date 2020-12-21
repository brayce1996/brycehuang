import foodpocketDemo from "@/assets/contents/foodpocket-demo.jpeg";
import ontimerDemo from "@/assets/contents/ontimer-demo.png";

export interface LinkModel {
    label: string;
    url: string;
}

export default [
    {
        title: "FoodPocket",
        role: "",
        startDate: "Jun 2020",
        endDate: "Present",
        image: foodpocketDemo,
        linkURL: "",
        descriptions: [
            "A Web App Recommend restaurants to users",
            "A Web App Recommend restaurants to users",
            "A Web App Recommend restaurants to users",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://foodpocket.github.io/",
            },
            {
                label: "Github",
                url: "https://github.com/foodpocket/foodpocket.github.io",
            },
        ],
    },
    {
        title: "OnTimer: Helps People Keep Punctual",
        role: "",
        startDate: "Mar 2018",
        endDate: "Jul 2018",
        image: ontimerDemo,
        descriptions: [
            "Worked closely with a team of 6 members to achieve a Minimum Viable Product within 4 months",
            "Used React-Native to develop Android and iOS apps",
            "Designed a landing page to promote OnTimer and gained more than 200 early adopters within the first month",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://wwang107.github.io/OnTimer-en/",
            },
            {
                label: "Github",
                url: "",
            },
        ],
    },
    {
        title: "FoodPocket",
        role: "",
        startDate: "Jun. 2020",
        endDate: "Present",
        image: foodpocketDemo,
        descriptions: [
            "A Web App Recommend restaurants to users",
            "A Web App Recommend restaurants to users",
            "A Web App Recommend restaurants to users",
        ],
    },
];
