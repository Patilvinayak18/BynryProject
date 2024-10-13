export const profiles = [
    {
        id: 1,
        name: "John Doe",
        photo: "https://img.freepik.com/premium-photo/photo-document-passport-id-mature-caucasian-man-suit_262388-3596.jpg?w=2000",
        description: "Web Developer based in New York.",
        address: "123 Main St, New York, NY 10001",
        location: "Pune", // Use city or country name
    },
    {
        id: 2,
        name: "Jane Smith",
        photo: "https://miro.medium.com/v2/resize:fit:1200/1*6JX-4guz1D12OdPPhdk9EA.jpeg",
        description: "Data Scientist living in Los Angeles.",
        address: "456 Oak Ave, Los Angeles, CA 90001",
        location: "Los Angeles", // Use city or country name
    },
    {
        id: 3,
        name: "Mary Johnson",
        photo: "https://media.istockphoto.com/id/450100369/photo/portrait-of-a-businesswoman.jpg?s=612x612&w=0&k=20&c=WK4vKnf6wNGwTqygZ62MzQ_l3fjd4H2ArcOXZ4UJmBY=",
        description: "Graphic Designer from Chicago.",
        address: "789 Pine St, Chicago, IL 60601",
        location: "Chicago", // Use city or country name
    },
    {
        id: 4,
        name: "Virat Kohli",
        photo: "https://media.gettyimages.com/id/79717949/photo/icc-u-19-cricket-world-cup-official-team-photo-calls.jpg?s=612x612&w=gi&k=20&c=77qkSNDZkkfpjCBPJRkMp2quXp9mC-CkHpIaK2ZXOSw=",
        description: "Indian Cricketer",
        address: "Mumbai,maharastra",
        location: "Mumbai", // Use city or country name
    },
    {
        id: 5,
        name: "Virat Kohli",
        photo: "https://tse4.mm.bing.net/th?id=OIP.A1CwO5Q3kquQPVeE9y4WWgHaJ9&pid=Api&P=0&h=180",
        description: "Indian Cricketer",
        address: "Mumbai,maharastra",
        location: "Mumbai", // Use city or country name
    },
    {
        id: 6,
        name: "Virat Kohli",
        photo: "https://tse4.mm.bing.net/th?id=OIP.3dCaxs7dL2vi1FTLTOuevQHaHa&pid=Api&P=0&h=180",
        description: "Indian Cricketer",
        address: "Mumbai,maharastra",
        location: "Mumbai", // Use city or country name
    },

];


export const posts = [
    {
        id: 1,
        profileId: 1, // Reference to John Doe's profile
        content: "Excited to start my new project on web development!",
        image: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "2024-10-10T10:00:00Z"
    },
    {
        id: 2,
        profileId: 2, // Reference to Jane Smith's profile
        content: "Just published my latest article on data science!",
        image: "https://images.unsplash.com/photo-1522765312985-2a1e2bce9ad7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "2024-10-11T12:00:00Z"
    },
    {
        id: 3,
        profileId: 3, // Reference to Mary Johnson's profile
        content: "Loving the new design trends in 2024!",
        image: "https://images.unsplash.com/photo-1630568119734-1f6df1cd1669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "2024-10-12T14:00:00Z"
    },
    {
        id: 4,
        profileId: 4, // Reference to Virat Kohli's profile
        content: "Had an amazing match yesterday! #Cricket",
        image: "https://media.gettyimages.com/id/1438337861/photo/india-v-bangladesh-icc-mens-t20-world-cup.jpg?s=1024x1024&w=gi&k=20&c=aNwQthJ8Onls5mS-2VO_jUjWO6XHKngVE-lAxBAzvuA=",
        timestamp: "2024-10-12T16:00:00Z"
    },
    {
        id: 5,
        profileId: 5, // Reference to the second Virat Kohli's profile
        content: "Excited for the upcoming season!",
        image: "https://images.unsplash.com/photo-1508881136857-d1781947f4d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "2024-10-10T18:00:00Z"
    },
    {
        id: 6,
        profileId: 6, // Reference to the third Virat Kohli's profile
        content: "Always working hard on my fitness!",
        image: "https://images.unsplash.com/photo-1728412390002-ca0567b27c83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        timestamp: "2024-10-11T20:00:00Z"
    },
    {
        id: 7,
        profileId: 4, // Reference to Virat Kohli's profile
        content: "Dhoni is the GOAT?? #Cricket",
        image: "https://media.gettyimages.com/id/1472909629/photo/india-v-australia-4th-test-day-4.jpg?s=1024x1024&w=gi&k=20&c=mbEk1emxk-G9xYB-t_-kVHZZRDnKWQxfka5PNTA4c0Q=",
        timestamp: "2024-10-12T16:00:00Z"
    },
];
