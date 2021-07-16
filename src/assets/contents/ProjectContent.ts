import rainformDemo from "@/assets/contents/rainform-demo.png";
import foodpocketDemo from "@/assets/contents/foodpocket-demo.jpeg";
import ontimerDemo from "@/assets/contents/ontimer-demo.png";
import raftDemo from "@/assets/contents/raft-demo.png";

export interface LinkModel {
    label: string;
    url: string;
}

export default [
    {
        title: "Rainform (volunteer project)",
        role: "",
        startDate: "Feb 2021",
        endDate: "May 2021",
        image: rainformDemo,
        linkURL: "",
        descriptions: [
            "Volunteered to help a non-profit organization turn paper form into web form",
            "Developed online form system by Firebase Auth and Firestore, allowing users to register/login, fill forms and manage personal activity history",
        ],
        links: [
            {
                label: "Webpage",
                url: "https://rainform.github.io/",
            },
        ],
        tags: ["Firebase", "Vue.js", "TypeScript"],
    },
    {
        title: "FoodPocket",
        role: "",
        startDate: "Jun 2020",
        endDate: "Oct 2020",
        image: foodpocketDemo,
        linkURL: "",
        descriptions: [
            "A Web App helps people to manage personal restaurant list and record restaurant visiting frequency",
            "Recommend restaurants based on user perference and data",
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
        tags: ["Vue.js", "Django", "PostgreSQL", "Travis-CI"],
    },
    {
        title: "Implementation of Raft Consensus Algorithm",
        role: "",
        startDate: "Jul 2020",
        endDate: "Oct 2020",
        image: raftDemo,
        descriptions: [
            "Used Go to implement Raft leader election, log replication, and reboot persistence features to manage a replicated log on a collection of machines",
            // "Implemented Raft leader election and heartbeats to ensure a single leader to be elected",
            // "Developed Raft persistence so Raft-based server resumes service where it left off after reboot",
        ],
        links: [
            // {
            //     label: "Webpage",
            //     url: "https://github.com/brayce1996/MIT_6.824/tree/master/src/raft",
            // },
            {
                label: "Github",
                url: "https://github.com/brayce1996/MIT_6.824/tree/master/src/raft",
            },
            {

                label: "Raft",
                url: "https://pdos.csail.mit.edu/6.824/papers/raft-extended.pdf",
            },
        ],
        tags: ["Go", "Distributed System"],
    },
    {
        title: "OnTimer: Helps People Keep Punctual",
        role: "",
        startDate: "Mar 2018",
        endDate: "Jul 2018",
        image: ontimerDemo,
        descriptions: [
            "Worked closely with a team of 6 members to build a Minimum Viable Product within 4 months",
            "Used React-Native to develop Android and iOS apps",
            "Designed a landing page to promote OnTimer and gained more than 200 early adopters within the first month",
        ],
        links: [
            {
                label: "Landing Page",
                url: "https://wwang107.github.io/OnTimer-en/",
            },
            {
                label: "BitBucket",
                url: "https://bitbucket.org/wwang107/ontimermobile/src/master/",
            },
            // {
            //     label: "Github (backend)",
            //     url: "https://github.com/kerry2040as/onTimer-server",
            // },
        ],
        tags: ["React Native"],
    },
];
