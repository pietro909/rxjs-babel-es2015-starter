import Rx from 'rx';

const observable_1 = Rx.Observable.interval(1000).timeInterval().map((interval) => {
    const id = (Math.random()*1000).toString()
        .replace(/\./,'').slice(0,8).split('')
        .map((n) => String.fromCharCode(10+n).toUpperCase()).join('');
    console.log(`${id} 1 second`);
    return {
        id: id,
        time: interval.value,
        interval: interval.interval
    };
})

const observable_2 = Rx.Observable.interval(3000).timeInterval().map((interval) => {
    const id = (Math.random()*1000).toString()
        .replace(/\./,'').slice(0,4).split('')
        .map((n) => String.fromCharCode(10+n).toUpperCase()).join('');
    console.log(`${id} 3 seconds`);
    return {
        id: id,
        time: interval.value,
        interval: interval.interval
    };
})

const zipped = Rx.Observable.zip(observable_1, observable_2);

export const zipIt = () => {
    zipped.subscribe(result => {
        console.log(result);
    })
}
