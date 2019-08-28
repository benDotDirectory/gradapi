/*
    Generates gradients
 */

module.exports = {

    // Generate and return a LINEAR gradient into JSON form
    generateLinearGradient: function() {
        var gradient = new Object();
        // Angle of the gradient (https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Values)
        gradient.angle = generateRandomNumber(0, 359) + "deg";
        // Decide how many different colors the gradient will have (between 2 and 5)
        var numColors = generateRandomNumber(2, 5);
        switch (numColors) {
            case 2:
                gradient.colors = [generateHex(), generateHex()];
                break;
            case 3:
                gradient.colors = [generateHex(), generateHex(), generateHex()];
                break;
            case 4:
                gradient.colors = [generateHex(), generateHex(), generateHex(), generateHex()];
                break;
            case 5:
                gradient.colors = [generateHex(), generateHex(), generateHex(), generateHex(), generateHex()];
                break;
            default:
                console.error("Error generating gradient colors");
                break;
        }

        return gradient;
    },

    generateTransparentLinearGradient: function() {
        var gradient = new Object();
        // Angle of the gradient (https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Values)
        gradient.angle = generateRandomNumber(0, 359) + "deg";
        // Decide how many different colors the gradient will have (between 2 and 5)
        var numColors = generateRandomNumber(2, 5);
        switch (numColors) {
            case 2:
                gradient.colors = [generateRGBA(), generateRGBA()];
                break;
            case 3:
                gradient.colors = [generateRGBA(), generateRGBA(), generateRGBA()];
                break;
            case 4:
                gradient.colors = [generateRGBA(), generateRGBA(), generateRGBA(), generateRGBA()];
                break;
            case 5:
                gradient.colors = [generateRGBA(), generateRGBA(), generateRGBA(), generateRGBA(), generateRGBA()];
                break;
            default:
                console.error("Error generating gradient colors");
                break;
        }

        return gradient;
    },

    generateRadialGradient: function() {
        var gradient = new Object();
        // Set the shape
        var shape = generateRandomNumber(0, 1);
        if (shape == 1) {
            gradient.shape = "circle";
        } else {
            gradient.shape = "ellipse";
        }
        // Set the gradient size
        var size = generateRandomNumber(1, 4);
        switch (size) {
            case 1:
                gradient.size = "closest-side";
                break;
            case 2:
                gradient.size = "farthest-side";
                break;
            case 3:
                gradient.size = "closest-corner";
                break;
            case 4:
                gradient.size = "farthest-corner";
                break;
            default:
                console.error("Error getting gradient size");
                break;
        }
        // Decide how many different colors the gradient will have (between 2 and 5)
        var numColors = generateRandomNumber(2, 5);
        switch (numColors) {
            case 2:
                gradient.colors = [generateHex(), generateHex()];
                break;
            case 3:
                gradient.colors = [generateHex(), generateHex(), generateHex()];
                break;
            case 4:
                gradient.colors = [generateHex(), generateHex(), generateHex(), generateHex()];
                break;
            case 5:
                gradient.colors = [generateHex(), generateHex(), generateHex(), generateHex(), generateHex()];
                break;
            default:
                console.error("Error generating gradient colors");
                break;
        }

        return gradient;
    }

}

// Generate a valid hex color code
function generateHex() {
    var hex = "#";
    while (hex.length !== 7) {
        hex = "#" + (Math.random()*0xFFFFFF<<0).toString(16); // some odd bug makes our hexo 5 digits (6 if you count the #)
    }
    return hex;
}

// Generates a valid RGBA color code
function generateRGBA() {
    return "rgba(" + generateRandomNumber(0, 255) + "," + generateRandomNumber(0, 255) + "," + generateRandomNumber(0, 255) + "," + Math.random() .toFixed(1) + ")";
}

/*
    Utility functions
 */

// Utility function to generate random numbers between integers X - Y
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}