export const determineCount = (results) => {
    let fingerCount = 0;
    if (results.landmarks) {
        fingerCount = 0;
    
        for (const landmarks of results.landmarks) {
            const handedness = results.handednesses[0][0].displayName;
            if (handedness == "Left" && landmarks[4].x > landmarks[3].x) {
                fingerCount++;
            }
            if (handedness == "Right" && landmarks[4].x < landmarks[3].x) {
                fingerCount++;
            }
    
            if (landmarks[8].y < landmarks[6].y) {
                fingerCount++;
            }
            if (landmarks[12].y < landmarks[10].y) {
                fingerCount++;
            }
            if (landmarks[16].y < landmarks[14].y) {
                fingerCount++;
            }
            if (landmarks[20].y < landmarks[18].y) {
                fingerCount++;
            }
        }
    }

    return fingerCount;
}
