const services = [
    {
        img: "./residential-solution1.png",
        category: "Design Trends",
        title: "Residential Architectural Solutions",
        description: "The future of Architecture and Design",
    },
    {
        img: "./facade-solutions.png",
        category: "Elegance of Looks",
        title: "Commercial Facade Solutions",
        description: "The future of Architecture and Design",
    },
    {
        img: "./residential-solution2.png",
        category: "Design Trends",
        title: "Residential Architectural Solutions",
        description: "The future of Architecture and Design",
    },
]

export default function Services() {

    return (
        <div className="flex flex-col pl-[20%] pr-[20%] pt-[5%] pb-[5%]">
            <h1 className="text-black font-bold text-4xl mb-[6%]">Dynamics Ranges / Category offerings</h1>

            <div>
                {services.map(({img, category, title, description}, index) => (
                    <div className="flex flex-row justify-between align-center mb-[2%]" key={index}>
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[rgb(89,126,168)]">{category}</h3>
                            <h2 className="text-black font-bold text-2xl">{title}</h2>
                            <h3 className="text-[rgb(89,126,168)]">{description}</h3>
                        </div>

                        <img src={img} alt={img} className="h-[40%] w-[40%] rounded-xl"/>
                    </div>
                ))}
            </div>
        </div>
    )
}