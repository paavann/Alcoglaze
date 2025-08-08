import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"

const products = [
    {
        img: "./aluminium.png",
        title: "Aluminium Doors & Windows",
        description: "Premium aluminium doors and windows",
    },
    {
        img: "./office-partitions.png",
        title: "Office Partitions",
        description: "Premium office space partitions [glass & metal]",
    },
    {
        img: "./glass-railings.png",
        title: "Glass Railings",
        description: "Glass railings for interiors and exteriors",
    },
    {
        img: "./structural-glazing.png",
        title: "Aluminium Doors & Windows",
        description: "Structural glazing that makes a building look magnificient",
    },
]

export default function LandingPage() {

    return (
        <div className="relative flex flex-col justify-center align-center">
            <hr className="w-[90%] self-center mb-[2%]"/>

            <div className="relative flex flex-col justify-center align-center h-full w-full gap-11">
                <div className="relative self-center h-[60%] w-[60%] rounded-xl overflow-hidden">
                    <img src="./facia-decor.png" alt="facia-decor" className="h-full w-full object-cover rounded-xl"/>
                    <div className="absolute bottom-25 right-4 px-3 py-1">
                        <h1 className="text-white font-bold text-5xl bg-opacity-50 text-right">
                            Building Facia Decor
                        </h1>
                        <h1 className="text-white font-bold text-lg bg-opacity-50 text-right">
                            One stop solution for all your fabrication needs
                        </h1>
                    </div>
                </div>
                

                <div className="pl-[20%] pr-[20%] gap-8">
                    <h1 className="text-black font-bold text-2xl mb-[2%]">Featured Products</h1>

                    <div className="flex flex-row gap-3">
                        {products.map(({ img, title, description }) => (
                            <Card sx={{
                                maxWidth: 345,
                                boxShadow: "none",
                                border: "none",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                                    cursor: "pointer",
                                }
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="130"
                                        image={img}
                                        alt={title}
                                        sx={{ borderRadius: "12px" }}
                                    />

                                    <CardContent>
                                        <Typography sx={{ fontSize: "0.88rem", fontWeight: 400 }} component="div">
                                            {title}
                                        </Typography>
                                        <Typography sx={{ color: 'rgb(89, 126, 168)', fontSize: "0.88rem", lineHeight: 1.2 }}>
                                            {description}
                                        </Typography>
                                    </CardContent>
                                    
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}