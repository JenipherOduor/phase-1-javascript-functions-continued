function saturdayFun ( activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun("bowl")

const mondayWork = function (toDo = "go to the office")
{
    return `This Monday, I will ${toDo}.`
}
mondayWork;
mondayWork("work from home");

const wrapAdjective  = function(style = "*")
{
    return function (degree = "special")
    {
        return `You are ${style}${degree}${style}!`
    }
}