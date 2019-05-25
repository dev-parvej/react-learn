export default Image = (id = false) => {
    let images = [
        {
            "id": "1014",
            "author": "Oscar Keys",
            "width": 6016,
            "height": 4000,
            "url": "https://unsplash.com/photos/AmPRUnRb6N0",
            "download_url": "https://picsum.photos/id/1014/6016/4000"
        },
        {
            "id": "1015",
            "author": "Alexey Topolyanskiy",
            "width": 6000,
            "height": 4000,
            "url": "https://unsplash.com/photos/-oWyJoSqBRM",
            "download_url": "https://picsum.photos/id/1015/6000/4000"
        },
        {
            "id": "1016",
            "author": "Philippe Wuyts",
            "width": 3844,
            "height": 2563,
            "url": "https://unsplash.com/photos/_h7aBovKia4",
            "download_url": "https://picsum.photos/id/1016/3844/2563"
        },
        {
            "id": "1018",
            "author": "Andrew Ridley",
            "width": 3914,
            "height": 2935,
            "url": "https://unsplash.com/photos/Kt5hRENuotI",
            "download_url": "https://picsum.photos/id/1018/3914/2935"
        },
        {
            "id": "1019",
            "author": "Patrick Fore",
            "width": 5472,
            "height": 3648,
            "url": "https://unsplash.com/photos/V6s1cmE39XM",
            "download_url": "https://picsum.photos/id/1019/5472/3648"
        }
    ];

    if(id){
        return images.find((el) => {
            return el.id === id;
        });
    }
    return images;
}