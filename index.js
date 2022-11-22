// Code your solution in this file!

function distanceFromHqInBlocks(deliveryDistance){
    if(deliveryDistance>42){
            return deliveryDistance - 42;
    } else{
        return 42 - deliveryDistance
    }
}

function distanceFromHqInFeet(deliveryDistance){
    return distanceFromHqInBlocks(deliveryDistance) * 264
}

function distanceTravelledInFeet(startDEliveryInFeet, endDeliveryInFeet){
    if(startDEliveryInFeet>endDeliveryInFeet){
            return (startDEliveryInFeet - endDeliveryInFeet) * 264
    } else {
        return (endDeliveryInFeet - startDEliveryInFeet) * 264
    }
}

function calculatesFarePrice(start, destination){
    let distanceCovered = distanceTravelledInFeet(start, destination)
    if(distanceCovered<=400){
            return 0
    } else if(distanceCovered>400 && distanceCovered<=2000){
        //convert cents to dollars
        return (distanceCovered-400) * 0.02
    }else if(distanceCovered>2000 && distanceCovered<=2500){
            return 25
    } else {
        return 'cannot travel that far'
    }
}