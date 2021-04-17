// 7 kyu
// Can Santa save Christmas?
//
//     Can Santa save Christmas?
//     Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
//
// But he has only 24 hours left. Can he do it?
//
//     Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration is a present Santa has to distribute. Determine whether he can do it in 24 hours or not.

    function determineTime(durations){
        let h = 0;
        let m = 0;
        let s = 0;

        for(let i = 0; i < durations.length; i++){
            let arr = durations[i].split(":")
            h += +arr[0];
            m += +arr[1];
            s += +arr[2];
        }
        console.log(durations, h,m,s)
        return h > 24 ? false : true;
    }