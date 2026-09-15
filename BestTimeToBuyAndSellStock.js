prices = [7, 1, 5, 3, 6, 4]

const maxProfit = function(prices){

    let minPrize=Infinity;

    let profit=0;

    for(let price of prices){

        if(price<minPrize){

            minPrize=price

        }else if(price-minPrize>profit){

            profit=price-minPrize

        }

    }

    return profit;

}

console.log(maxProfit(prices))
