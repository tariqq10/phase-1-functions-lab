function distanceFromHqInBlocks(pickup) {
    const hQ = 42; // Scuber's headquarters at 42nd Street
    if (pickup > hQ) {
        return pickup - hQ;
    } else {
        return hQ - pickup;
    }
}
function distanceFromHqInFeet(pickup) {
    let feet = 264;
    let distanceInBlocks = distanceFromHqInBlocks(pickup);
    return distanceInBlocks * feet
}
function distanceTravelledInFeet(start, desitination) {
    let feet = 264
    let distanceInBlocks = Math.abs(desitination - start);
    return distanceInBlocks * feet

}
function calculatesFarePrice(start, destination) {
    let feet = 264
    let distanceInFeet = Math.abs(destination - start)*feet;
    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet <= 2000 && distanceInFeet > 400) {
        return (distanceInFeet-400)*.02

    }else if(distanceInFeet<=2500 && distanceInFeet>2000){
        return 25
    }else{
        return "cannot travel that far"
    }
}