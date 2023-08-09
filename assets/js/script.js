function twoSum(nums, target) {
    for (let i in nums){
        // console.log(nums[i])
        for (let j in nums){
            // console.log(nums[j])
            if(nums[i]+nums[j] == target){
                return [nums[i], nums[j]]
            }
        }
    }
}