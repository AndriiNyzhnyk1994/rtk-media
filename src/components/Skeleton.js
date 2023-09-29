import classNames from "classnames";



function Skeleton({ times, className }) {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    )
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )


    const boxes = Array(times).fill(0).map((_, i) => {
        // 1 - Array(times) creating a new array whose length is equal to `times` value
        //  and all elements of array will be `undefined`
        // 2 - fill(0) fills the array by `0`. It means we are changing all el-s
        //  from `undefined` to `0`
        // 3 - But here value of el-s dosen't matter. 
        //  We need only array's length to mapping it 
        //  a certain (определенное) amount of times
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames} />
        </div>
    })

    return boxes
}



export default Skeleton