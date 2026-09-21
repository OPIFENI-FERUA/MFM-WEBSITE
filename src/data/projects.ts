export interface ProjectPhoto {
  src: string;
  alt: string;
}

export interface ChurchProject {
  id: number;
  status: "completed" | "ongoing";
  category: string;
  title: string;
  location: string;
  summary: string;
  story: string[];
  photos: ProjectPhoto[];
}

export const churchProjects: ChurchProject[] = [
  {
    id: 1,
    status: "completed",
    category: "Skills Training",
    title: "Skills Training for Members and the Community",
    location: "MFM Kanyanya",
    summary:
      "Practical training that helps people earn a living, serve with dignity, and stand on their own feet.",
    story: [
      "Skills training has been one of the main works of MFM Kanyanya. The church opened classes so members and neighbours could learn a trade, not only receive a sermon. Sessions have covered tailoring, crafts, basic computer use, and other hands-on skills that can start a small income.",
      "Trainers from within the church walked with learners from the first lesson to a finished piece of work. Several who passed through the programme now support their homes, help in church departments, and train others. The goal has always been simple: equip people so they can work, give, and live without depending on charity alone.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1400&q=80",
        alt: "Hands-on skills training workshop",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
        alt: "Learners working together in class",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
        alt: "Computer and vocational training",
      },
      {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
        alt: "Training session in progress",
      },
    ],
  },
  {
    id: 2,
    status: "completed",
    category: "Elderly Care",
    title: "Giving to the Elderly",
    location: "Kanyanya and surrounding homes",
    summary:
      "Regular support for older members and neighbours through food, visits, prayer, and practical care.",
    story: [
      "Giving to the elderly is a standing ministry of the church. Teams visit homes, sit with widows and older saints, and take food, soap, and other needs that are easy to overlook. The visits are as important as the gifts — many of those we serve simply need to be remembered.",
      "Departments pack items together, then go out in small groups so no home is rushed. Prayer is offered in the sitting room, needs are written down, and the church follows up. This work has taught the congregation that honouring fathers and mothers in the faith is part of the gospel we preach.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3b4a9?auto=format&fit=crop&w=1400&q=80",
        alt: "Caring for an elderly community member",
      },
      {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
        alt: "Support reaching families in the community",
      },
      {
        src: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=900&q=80",
        alt: "Food and supplies prepared for giving",
      },
      {
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
        alt: "Volunteers serving together",
      },
    ],
  },
  {
    id: 3,
    status: "completed",
    category: "Outreach",
    title: "Community Outreaches",
    location: "Kanyanya and neighbouring communities",
    summary:
      "Taking the gospel and practical help beyond the church gate — into streets, homes, and open grounds.",
    story: [
      "Community outreaches have carried MFM Kanyanya into the neighbourhood with the Word, prayer, and open hands. Teams move with tracts, invitations to service, and help for households that are struggling. Some outreaches are evangelistic; others are simply presence — listening, praying, and meeting a need on the spot.",
      "These days in the community have opened doors for new families to come to church, and they have kept the congregation from becoming a closed circle. Outreach remains how we love Kanyanya: not only from the pulpit, but on the road.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Community outreach volunteers",
      },
      {
        src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=900&q=80",
        alt: "Serving neighbours during outreach",
      },
      {
        src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
        alt: "Hands joined in community service",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
        alt: "Church team in the community",
      },
    ],
  },
  {
    id: 4,
    status: "ongoing",
    category: "Agriculture",
    title: "Church Farm",
    location: "MFM Kanyanya farm land",
    summary:
      "An active farm project to grow food, teach stewardship, and support the church and families in need.",
    story: [
      "The church farm is still in motion. Land is being worked so the congregation can produce food, reduce costs, and have something to share with the elderly and outreach homes. Members take part in planting, tending, and harvest as an act of service, not only as a business.",
      "As the farm grows, it will feed ministry tables, train young people in practical work, and give the church a longer-term way to care for people. This is not a finished story — it is work we are doing now, season by season.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
        alt: "Church farm fields",
      },
      {
        src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
        alt: "Crops growing on the farm",
      },
      {
        src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
        alt: "Farm work in progress",
      },
      {
        src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80",
        alt: "Harvest from the land",
      },
    ],
  },
  {
    id: 5,
    status: "ongoing",
    category: "Multi-Purpose Cooperative",
    title: "Church Cooperative",
    location: "MFM Kanyanya",
    summary:
      "A multi-purpose cooperative that helps members save, support one another, and build steadier homes.",
    story: [
      "The church cooperative is an ongoing initiative for members who want to save together, support one another, and access practical help without depending on harsh financial pressure. It is guided by trust, accountability, and good stewardship so that money can serve families and the church with dignity.",
      "As more members join, the cooperative will help with school fees, small businesses, and emergency needs in a way that keeps dignity and encourages responsibility. We are still shaping the culture of saving, accountability, and prayer around this work, and it is one of the ministries that continues to grow with the church.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
        alt: "Members meeting around savings and planning",
      },
      {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
        alt: "Records and stewardship",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
        alt: "Community financial meeting",
      },
      {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
        alt: "Members working together",
      },
    ],
  },
];
