const games = [
    {
        id: 1,
        name: "dredge",
        price: 300,
        discount: 0.25,
        rate: 4,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000049267/fe7c711c32bb15ecf9c96dac96a7c6818e49d265c28fa59145c0cbf5ebf34055"
    },
    {
        id: 2,
        name: "resident evil 4",
        price: 1200,
        discount: 0,
        rate: 5,
        image: "https://img.youtube.com/vi/7RPSBeRIP6Y/maxresdefault.jpg"
    },
    {
        id: 3,
        name: "sons of the fores",
        price: 350,
        discount: 0.2,
        rate: 5,
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1679677298"
    },
    {
        id: 4,
        name: "the forest",
        price: 200,
        discount: 0.3,
        rate: 5,
        image: "https://store.playstation.com/store/api/chihiro/00_09_000/container/MX/es/99/UP0240-CUSA10518_00-THEFOREST0000000/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
    },
    {
        id: 5,
        name: "the wild eight",
        price: 300,
        discount: 0.45,
        rate: 4,
        image: "https://i.ytimg.com/vi/g5A0MnEbLyA/maxresdefault.jpg"
    },
    {
        id: 6,
        name: "cs:go",
        price: 0,
        discount: 0,
        rate: 4,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427"
    },
    {
        id: 7,
        name: "dayz",
        price: 600,
        discount: 0.2,
        rate: 3,
        image: "https://store-images.s-microsoft.com/image/apps.23097.69886306496288395.9ec42146-6037-4440-b5c7-3a44e5213cc3.0e09163e-a6c4-40f6-9fe1-24a6b4685c64"
    },
    {
        id: 8,
        name: "forza horizon 4",
        price: 700,
        discount: 0.2,
        rate: 4,
        image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_3bb72d659dab4948809a70a82168b881.jpg"
    },
    {
        id: 9,
        name: "the long dark",
        price: 400,
        discount: 0.75,
        rate: 3,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/The_Long_Dark_Key_Art.jpg/220px-The_Long_Dark_Key_Art.jpg"
    },
    {
        id: 10,
        name: "stardew valley",
        price: 250,
        discount: 0.45,
        rate: 5,
        image: "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png"
    },
    {
        id: 11,
        name: "dont starve together",
        price: 100,
        discount: 0.5,
        rate: 4,
        image: "https://image.api.playstation.com/cdn/UP2107/CUSA04236_00/39E95ckFs1PkxIFi9Ge0pRGNGmjLNB07.png"
    },
    {
        id: 12,
        name: "the last of us 1",
        price: 1000,
        discount: 0,
        rate: 5,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png"
    },
    {
        id: 13,
        name: "the last of us 2",
        price: 1400,
        discount: 0,
        rate: 1,
        image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png"
    },
    {
        id: 14,
        name: "elden ring",
        price: 800,
        discount: 0.3,
        rate: 5,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png"
    },
    {
        id: 15,
        name: "cult of the lamb",
        price: 250,
        discount: 0.1,
        rate: 5,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1823/uGwz6VetgE8k5BpCPKBD1qTj.png"
    },
    {
        id: 16,
        name: "overwatch",
        price: 0,
        discount: 0,
        rate: 3,
        image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/03/16648149397801.jpg"
    },
    {
        id: 17,
        name: "haven",
        price: 150,
        discount: 0.4,
        rate: 5,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2317/TTPLQjs71sojy44vBWh4qeLY.png"
    },
    {
        id: 18,
        name: "celeste",
        price: 100,
        discount: 0.6,
        rate: 5,
        image: "https://media.vandal.net/m/44239/celeste-2018128121116_11.jpg"
    }
]

const getGames = () => {
    return new Promise((resolve, reject) => {
        if(games.length === 0) {
            reject(new Error(`No existen datos`));
        }
        setTimeout(() => {
            resolve(games);
        }, 2000);
    }); 
}

export default getGames;