const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i === heights.length ? 0 : heights[i];

        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const heightIndex = stack.pop();
            const height = heights[heightIndex];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
};