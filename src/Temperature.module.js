
export const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    export function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    export function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    export function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    export function Test(props) {
        if (props.celsius >= 100) {
            return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
    }
    export function Test2(props) {

        return <textarea>The water would not boil.</textarea>;
    }

   export const data= [
        {id:1,category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {id:2,category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {id:3,category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {id:4,category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {id:5,category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {id:6,category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]