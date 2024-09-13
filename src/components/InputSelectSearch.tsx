import { Input } from "@nextui-org/react";
import { useState } from 'react';
import GroupContinentSelect from './GroupContinentSelect';


const CONTINENTES: any = [
    {
        name: "América",
        urlimage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAPFBMVEUAAADvECDsHCTsHSXvGyXsHCXsHCbvGCDsGyXsHCXsHSXsHCbtGyTsHSXsHCbsHSbrHCbrHCXsHSXsHSZx6egEAAAAE3RSTlMAEEDwMMCAIGCQoLBwUODf0M+flsodkwAABIZJREFUWMOk1ulupDAQBOByt9v3AdT7v+sKZrIhmSNk9/uFkCg14ALjv7kIZNWO/+ElCE5WqiPZepP4j4mVO/WCO1dtrJNUklvHP3DKw1R63PS0VOMH+X3kFviXOsChZ9HKvxb3+0yeGGJW9VwDbyyE9uvMoDxR35XkOll5yGmyq4cPHpdFnlgHlF9MsmwUVKrDRRIbD0pSy/QwfjdphcoFV7XVcxduV4s35aNGUiMuckbJJIfcop3yGeXIgqvCpEqUno6wAeMLZg7XONdXUsMM3K0umvK5JrgoSlSSRW0hyXw0/jkTXFeVnIVGDsGb0HQxrh4pmRz9ViVAKl8Q/EwALFOCh1JbDiQV2PjKcPhRWjxcHSGtKAzGXcHKlyp+FF07xi1xia7D72mLoPKlHPED52sBOjzgKiRZuD+0XAqf04634roADki4SW6SNRyHdfKFibcqi3eQY2RYua8iBeCy8oWUHN5IbJIjBpClVG8jpxAkHJNG5Rh8puGt1FqhxrBJUzWgbAB8xEEiIE9j5cJneU6mKJalJa5NqR5/CR+Zxw+8bFp6jGg+WOABn9x4Eop3ZBMgVo87D+lBRHDS+GARvBFI5lMLts3DR3wR+aDjnfLxF5cBcAgpid3KmvDJHhZUwzuTrJsF55cGX6uMAjVjsYJP6XevPpJLonI1K+hkr4jMRksM+KvzqxXvFUrjblWgLxLgqJk7cbirxrOqFSe+P35MEFce9oymzm1av/XbY/BkePrPgKLUmuL33BDKMasHChuOyHGccbjJdr75iBC/7w9p9x1WT9uxfLLyUBAzw54Regu3MwepgWca8KHwZHPY7Kin3XY6tszkVinTO9h0wLKHOuxcE54Vhxu38ivjh5lTaTkJXEiNZjD1QKyfbXTGD4MjnLvzUpYkRatILpM0TzpIdSQtYtde/pvL4GuauZv3e/AQDyU5/ddKKb7oUVZestR279EYtPPr0G+DZl0nr5iWBbtKqhvp1NPFe3zhycFLprABgXpbJDvHg8OjzguWP63Y25KDIAwG4D8YOePS5v3fdWepY5mqVBe+W2cyUUgCTtqK10hsSq3WLZWxw7NcoUAW/JojIccqn+VobF6iS2KEmBgUFFbLcWcO2wq2hKoxW4Cw4pO3l8I/nGrEtXUODm9GL8dHuzKxHIFUWuQYY+VKUPLYEI6k6LZ+TsGdfdLCvMrJCeMbHQib46jqYy57fJE8fdy/9x7rivNW7E3k7KVNNkXUlWLRYPZPs5yYkXYt+Sp7HlS9d+78RMv1VFlJhXCHkhOPp2xCxD3GS5NWMcIxbsqtGaNDNDC3f+74Vn8J8jAA6+hxi5U2Bw2AcEuSJuu9wW26naYxwOCgBsDgoPud1P9NZ8K/zY3BstNdqYwOTg5lQo/D4RoIffS+/j16kXsX6zJPWs8S0S2lvNUQDADt0I2DyfWNG/SDfuR5qoOCMUBinupMFWEIvd5kKRlQck+DAeJ66HFSwqVIkdEtLX9TyW0HZo6R0M/mKZfWjMFKHTBGU1kUhiNRGI/nZBnDMQjf/QJboLQ7HbMu3AAAAABJRU5ErkJggg=="
    },
    {
        name: "Oceanía",
        urlimage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABUCAMAAADavrt+AAAASFBMVEUAAAAplkAllT8plUAqlUAgj0AqlUAok0AqlEAplEAplUAolEAqlUAplUAolUAplEAplEAqlUAplUAplUAolEAolkEolT4qlUCRySD6AAAAF3RSTlMAUB/AMBCAQO/g8HDPkGCg0LCvnl8/hzbZS8YAAAI6SURBVFjD7djrjpswEAXg47vNnWS35/3ftKXZCmiIcYBpVanf30gnk2ECHlDM3WuHTV3EWfUQvcaGhgqnaMCTTPeg/Id3mGmyxxl3Ri54zFoy4gTDNYtZJNnhsMC1bt0ScsRhzYvo+XvxNvUYO881ez67JtlM4VwzG/3SeIcznMSPT504e8qpObkZhXItX2kcFjwfYkCpjq81y5ieXxIKaWYZuzFDKOS4wz8XURZsGbmnUYt2F8+KjaFigQY/pOVP2ZfYsMjN4s5Z1NgTeFQtmO3/ZraOPGrEDs/j7N4A8rjYOrymIk9p3KvgNvGsFDaTEy+h8LvPGy/iMxfwrKjFotd//RB5qX75ML1Y84EH3/F6SWESIwV4TDj5p7Jvgtm8Obls9oLZ1IChEAO4ikIsdEchLXwzUIZBTSkGTqDs+WImyjDzhiCSjUQRBnKFG0w8JYyAWFc0xArv94/c58+0iRlVqyzg6sQ3pJJdIc0vkEJoj5zcem4ZOou1gYV0fg+uajxR1ddnzOvzBQ0OGywnbcOs5LBg8ufoWTv9oMCswWKpfxqO1yuiRcsc47DkzGriMnQ1As2YMjOrsV12ZbFDW4yVHcuXEsWHZFFAfar4zgbrK5K9K3wBZ1RdUPbMBocyIXOD63GBkHkinKUzHTkt8VmFa6jMkJymklRLJqGd400Xug5Xcm2voSpWCkLsaPHfH6JuGlIMae4mfoOAO38aIED9ugNK4E81JFScQISRawk0yUFDhq63kr8DZvBmHtrjXNEAAAAASUVORK5CYII="
    },
    {
        name: "África",
        urlimage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABeCAMAAACKLsOVAAAAPFBMVEUAAAD/zzD7yTf/yjX8yTb7yTj6yTf/xzj7yTf6yDj7yTj7yTf8yjj7yzj6yDj6yTj6yDf8yTj7yjn7yTiVArwtAAAAE3RSTlMAEPAwUIDQILDgwJBgQN+gcF8/O/MYGgAAAk1JREFUWMOs192SgyAMBeAE5EcQRM/7v+vOdmZru2iphO/Om8wZEonSpX3XWzQmhInG4JjxpEnI/FZgn/HCSBMC2YaMN5FkImork4RbccInEphwYd22v7Ta7HSLxYWjWwuAooVBD+pRyuOXNcYRuX1jajFo8Jr88RABqGCbSVuUxTsFOPqELW7zMwp94Cw6lE9JtUeXYOhaQCfXeDu7xEbfuyimCyv6mUbQkVE5Q2KiMwtErKYTEMpUcwpCk7xPtSQ/09pCNYZQYHnRWq6rJogtjTUy6FqxEFOubr6cikyvWKEiHwGFITzXZyrn6VXJOIhHwG2BjxUlVmgzWQHgap/IzfW5yvnGWyXbWhHDFHrS1bjaWRS0/uqzxRGRH3C5RGA2Uyph1fTgANyNG+gfTvQuJecC7lCavjIPqtl94Xxb0+Gc6N8wdQxo0/LTirklMQzCMNA8QoAB0vuftp9p2klZYu8BNMDICOFx+nEGf6hyMvc8xyWoaa7qnSziiuGBclcVeUDRn+h6eUvyBNYmOShu5Ql53iXsV5rlAQ4YdR3epTgv3qWaw19WXDTRk8hcdOBJ4FESsGkjrSd7G3hmN1ikq19wV51ZP36WJ2cxTyVcG5kwgv+nGa9jVwWyTdd5pvlmcPX3b5MEoTRyP43VuErzcI7TuOL+73z3PKVPWy6HdbgVvc7IISvcWPXo10s3yAoVfHO0ZhF9XnQ0KKp/+lVREgrPUE6jmipXZTHg+J16PbufVEb9Ul9ighsTTd0rtdQoJ2qrptx7a7tYAtXe08wiIyT58eAAAAAASUVORK5CYII="
    },
    { name: "Asia", urlimage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABUCAMAAAAxiQB9AAAAP1BMVEUAAACAzyCAzyiAzCh+zCmAzyp+zCl+zCl+zCp+zCmAzSmAzSiAzCl+zCp+zCl+zCl/zCl/yyp/zCp+zCl/zCoBc/nAAAAAFHRSTlMAECBA8DDAkICwcGBQ0KDg38+fb17tws4AAANQSURBVFjDtNfdboQgEAXgMzAMIOJfz/s/a5vWRDex7uou34Xh6jgZRwh4riB5NBE5C1pYWNGCaE1oIQxZDS14JdHEQJXBoYE+exqasGbd8A5tSEEbWR1aCNQqgo+TSM4zF3xUsH7mLy3Ysf6tL+qNmx6bQh1V/O1c7mjAxo01drDJ4Y6g3NSAPVmf90y7epPDAx9wj5jpLtcvU7IIpPnL/QWPDlf1AYAoN7q+JCcjM262oafBe2/cKHfq+tcwJ4crIpOlzGI8NsCLIP8uL85YtCVzjDymMs+6kGuy35+QGf9zpCWStfAf02OTbAsWnAdnI6nK16iIoPiv4nEmSKZ1xgsmcko9SZOzmZgL1U+ZF01/4/5kf/CsvKeTs+A+87bO4VAgGRPvGjmzwwE38x1TMupRcJj4jlrgbMCBjm/J+OFwIPE9a+jHgse/KRr6jwYnV71uZ9exyMsGwC0ckwlOKC8wq9EowFK9QIAPVezxIzigYx9wLvB1HVZlXZ/xfFnCyikZ8YRb+KL4UIw8v3x9F193u63CQBCAZ9de/4OTdt//WY9qkwPNBdgKUr/LSDgEZ2bxeDsy7SMSl+J43bhXP+oy9rY2zAmaRXAq6KME8z2+bjBoBKecTnLBY4TVSSlhCKtfdEJFJowgAlsdV8AYQ1HnAu0ZVyQJTY2luALyqAYnchDgqU8hDMdO2oXCJ7ca9pfHhGT1ig3/eyKUwfotA91WRTg9CD/WPJjgL2K9YnMgjisAMhZniItEHWcFiA5kokZceeo4R0AhWr1LuCKqswPJGSZc8tpNTI6CEVmbxdixhYexdpzGKmJc0MYxm6AXImZUbbx5GjCd5WThhAn8vjcPu9+i7moizpixr9Ov82k/qNQtGcUzprFuVnRm/5qt/Qs7zNuq2HrC5nAYdPa4a4op9L7jTrUKGkHvKPzgiDm1esaBOZ7pY3vOaHLBFMKb5ZCxwEnVomERfCQfMlaA7Li3LCXGR6jsoydlEL1+WHCCz4hBt08hCehT/xa05KToiXSMG1H9jgWgry1AhLuIjdwzE01JYhh3Seq5TRrJngGiRWDuecwaSMLqEFeADeX1qRY3oLWgycT9g7wobpGj9/Q7QbiLKcTFcObX3/wP/AO49MINtSPuKQAAAABJRU5ErkJggg==" },

    {
        name: "Europa",
        urlimage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABeCAMAAACKLsOVAAAAQlBMVEUAAABQr+dQr+dQr+9Qr+RSruVRruVRruRSreZQr+ZRruRRruRRruVRruZSreRSreVSreRRruVSreVSreVRruRSruXsdMxpAAAAFXRSTlMAQCAQMIDQwHBQkO/foPDgYLCvn1/4R+PEAAAD70lEQVRYw6zWWY4bMQxF0ad5rMnO3f9WA3Q+CmXYQLnDswDyiaIA6aYaYg0yFZ7zmersUXaaFhjAsCr4x4uW2VYgy0Rd98WxhNgHrFEmEo9SeSR/FOiysR/MZeMp6XCyUoEBDy87vsAKUGTHxZJrh5SazISWu39QlFOQoZihq5UmQ+SMlyNH2QlpIjWostMnSYptkaG24mTOzaj7UtUtSfdVCLIV0mCVpZgzkL0MJYDcZKkC7EGW2oDVyVQCtihbFbYmY50RZSwOdvuaDC9rdUuy9hzZPKiDTdYiNBkLHZz96aGaJ22F/j+hPg11BP1G9LW3ktz7qZbjdyH7LGOM1X8cwtcxo9sGwHSKeu+o+orfy+CfXMo169kj8cUvzodlwmk+ezhrnisauP8IwuKevBj+vKMg3yX1owLpZk2398mrHH/adUlKebgBeQLH3dV0vDGSpLxGuQynEm9GLbzVpBHUBhe7bklclZUfSSpVhYt+iaNPIi+GqytADFqYXFT98H97M7Mdt2EYilLUvtlyZu7//2phC7Vi11YVd9CDwSB50AVFUlwQ7Vl5n9x9n/xTlXxelIjB4MhElWJySLEzVyVUsvC7A7aDuEiJFodYD9EV7eyb0Xr1VsaZVhZYo6KuQx+bdSLtn539Zpyw1Kjxm8q1ZtWpWW1ajsqAA+erKmeAwHSJn1GZ+RAxG67y9oC6kZSvFHcrHHqMt6nwdjOPLqMFil/4jRgwFOLD51kf1s+Lip8RDYes5m2dWeZ/DFTzYoISJINmImFwg5FDohOAZRPNXJu0/k64I9MIHAHn9+fGAn1UR0rvbSajkNq9pb1Bj4k7ww20OFcGTZ5IkX4c/IC33dq7TakoRQJfFh3mbnje+8yqnwDesrZPpA7KQjdRIwOCagnWId0Gir3Qb2mcg8tCSBp4Ucv9GLXACockqVIWwaugFa+IPlHpO80IR9LsiezxZV/FYIg7UQt4EqnGn7VN+IBO6D0ZIL4USY3PYLqE59nLEuvz8BhlnrulnzdzDWDp22CMyROVCdPcG061KULIMGymr0MsUSlMd/D65zCIVUxjZBsxSKAhOKWEYTSNISw+4EWDmL8l0BT8C5VZ0RiMexbyORCVdv8HokbYc4Ff4FSbMEeRbWdYT9lTz2RB5Kfx6KtvL7jWTgNoUts/c9GJOFusfHRvS1IRc9503HVzd2EeGXaws2ynBGWY9bY3ua7MgFN399Xm4JnITeuXLXsmGHV2/0BGxeMyaNy2vsxOzpuVih4gUDFEbjO8lqBEpJ7+gtASxRyWSxlW99pCD4lVk6lh6oapgpb0DMHzFDTTO6V+zYoew5L+J1IyjfELRzeojpX0sQMAAAAASUVORK5CYII="
    }
]


const InputSelectSearch = () => {

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState("");
    const onChange = (e: any) => {
        setSearch(e.target.value)
    }

    return (
        <div className="relative z-50">
            <div className="w-[300px] mx-auto">
                <Input
                    type="text"
                    placeholder='Seleciona el continente'
                    value={search}
                    onChange={onChange}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}

                />
            </div>
            {open && (
                <div
                    className={`absolute left-0 mt-2 w-[600px] p-4 bg-white border border-gray-300 rounded-xl shadow-lg transition-all ease-out duration-300 transform ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    onFocus={() => setOpen(true)}



                >
                    <GroupContinentSelect continentes={CONTINENTES} />
                </div>
            )}
        </div >
    )
}

export default InputSelectSearch