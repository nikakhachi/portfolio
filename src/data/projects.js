const projects = [
  {
    name: "Traffic Analysis",
    description:
      "Tbilisi City Hall project, where authorized users can get the car information on any Tbilisi street cam at a selected time. Their average velocities and full routes across the town with a visualization and statistics.",
    image: "assets/projects/ta/TA.jpg",
    slideshow: ["assets/projects/ta/TA.jpg", "assets/projects/ta/TA2.jpg", "assets/projects/ta/TA3.jpg"],
    technologies: ["ReactJS", "DeckGL", "NodeJS", "DynamoDB"],
  },
  {
    name: "Counter Disinformation",
    description:
      "Winner project in USAIDs Counter Disinformation Program. Where users can track and search specific entities, individuals, their shares in companies and other public information. Getting real-time notifications on any change. All data gathered in one place.",
    image: "assets/projects/cd/CD.jpg",
    slideshow: [
      "assets/projects/cd/CD.jpg",
      "assets/projects/cd/CD2.jpg",
      "assets/projects/cd/CD3.jpg",
      "assets/projects/cd/CD4.png",
      "assets/projects/cd/CD5.png",
    ],

    technologies: ["ReactJS", "Force-Graph", "NodeJS", "SocketIO", "Neo4j", "PostgreSQL", "S3", "SQS"],
  },
  {
    name: "Golden Gate",
    description: "Platform, where users can create legal documents, forms and contracts and print or download them",
    image: "assets/projects/goldenGate/GG.png",
    slideshow: [
      "assets/projects/goldenGate/GG.png",
      "assets/projects/goldenGate/GG2.png",
      "assets/projects/goldenGate/GG3.png",
      "assets/projects/goldenGate/GG4.png",
    ],

    technologies: ["ReactJS", "TypeScript"],
  },
  {
    name: "B Bot",
    description: "Messenger bot. Serves as a number 1 insurance bot in Georgia.",
    image: "assets/projects/bbot/BB.jpeg",
    slideshow: ["assets/projects/bbot/BB.jpeg"],

    technologies: ["NodeJS", "Botkit", "PostgreSQL"],
  },
];

export default projects;
