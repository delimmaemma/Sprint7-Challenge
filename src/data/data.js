import BigMac from '../images/big-mac.jpg'
import Salad from '../images/salad.jpg'
import Starbucks from '../images/starbucks.jpg'
import Jack from '../images/jack-in-the-box.jpg'
import TacoBell from '../images/taco-bell.jpg'
import IHOP from '../images/ihop.jpg'


export const restaurants = [
    {
        Image: BigMac,
        Name: "McDonald's",
        Price: '$',
        Genre: 'American',
        Type: 'Fast Food',
        Selection: 'Burgers',
        Wait: '10-30 Min',
        Fee: '$5.99'
    },
    {
        Image: Salad,
        Name: 'sweetgreen',
        Price: '$',
        Genre: 'Healthy',
        Type: 'Lunch',
        Selection: 'Salads',
        Wait: '30-45 Min',
        Fee: '$4.99'
    },
    {
        Image: Starbucks,
        Name: 'Starbucks',
        Price: '$',
        Genre: 'Cafe',
        Type: 'Coffee & Tea',
        Selection: 'Breakfast and Brunch',
        Wait: '10-20 Min',
        Fee: '$3.99'
    },
    {
        Image: Jack,
        Name: 'Jack in the Box',
        Price: '$$',
        Genre: 'American',
        Type: 'Fast Food',
        Selection: 'Chicken and Burgers',
        Wait: '40-50 Min',
        Fee: '$3.99'
    },
    {
        Image: IHOP,
        Name: 'IHOP',
        Price: '$',
        Genre: 'American',
        Type: 'Breakfast and Lunch',
        Selection: 'Chicken and Milk Shakes',
        Wait: '30-40 Min',
        Fee: '$5.99'
    },
    {
        Image: TacoBell,
        Name: 'Taco Bell',
        Price: '$$',
        Genre: 'Tex-mex',
        Type: 'Fast Food',
        Selection: 'Mexicos, Tacos',
        Wait: '20-30 Min',
        Fee: '$3.99'
    }
]
export const form ={
    name: '',
    size: '',
    sauce: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    topping5: false,
    topping6: false,
    topping7: false,
    special: '',
}