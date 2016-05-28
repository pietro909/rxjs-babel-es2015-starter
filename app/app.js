import Rx from 'rx';

const messages = Array(4).fill().map(() => {
    const id = (Math.random()*1000).toString()
        .replace(/\./,'').slice(0,8).split('')
        .map((n) => String.fromCharCode(10+n).toUpperCase()).join('');
    return {
        id: id
    };
})

// const observable = Rx.Observable.from(messages);
const observable = Rx.Observable.interval(1000).timeInterval().map((interval) => {
    const id = (Math.random()*1000).toString()
        .replace(/\./,'').slice(0,8).split('')
        .map((n) => String.fromCharCode(10+n).toUpperCase()).join('');
    return {
        id: id,
        time: interval.value,
        interval: interval.interval
    };
}).do((m) => {
    console.log(`side effect with message ${m.id}`);
}).share();

const consumer1 = () => observable.subscribe((x) => {
    console.log(x);
    x.newProperty = "hi, I added a new property";
});

const consumer2 = () => observable.subscribe((x) => {
    console.log(x);
    x.id = 111222;
});

const consumer3 = () => observable.subscribe((x) => {
    console.log(x);
});

consumer1();
consumer2();
consumer3();
// setTimeout(consumer2, 1000);
// setTimeout(consumer3, 2000);
