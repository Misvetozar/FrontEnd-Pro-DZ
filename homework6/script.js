let students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
];


function calculateStudentAverageMark({marks}) {
    return getAverage(marks)
}


function calculateGroupAverageMark(students) {
    const allMarks = students.flatMap(({marks})  => marks);  
    return getAverage(allMarks);
}

function getAverage(arr){
    const sum = arr.reduce((acc, mark) => acc + mark); 
    return sum / arr.length;
}