# DosingCalculatorPublic

It determines the number of tablets to be consumed in order to fullfill the DND(Daily Nuitrition Deficiency).
Pass the JSON object via PostMan as Http POST method
{
        "zinc": 2.2,
        "vitaminD3":3000,
        "omega3" : 2000
    }
It returns the response as an array with the tablet name and number of doses.
