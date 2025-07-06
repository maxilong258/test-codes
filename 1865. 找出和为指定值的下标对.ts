class FindSumPairs {
    nums1: number[];
    nums2: number[];
    nums2Count: Map<number, number>; // 存储 nums2 中每个值的出现次数

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.nums2Count = new Map();

        // 初始化 nums2Count
        for (let num of nums2) {
            this.nums2Count.set(num, (this.nums2Count.get(num) || 0) + 1);
        }
    }

    add(index: number, val: number): void {
        // 更新 nums2Count
        const oldVal = this.nums2[index];
        this.nums2Count.set(oldVal, this.nums2Count.get(oldVal)! - 1);
        if (this.nums2Count.get(oldVal) === 0) {
            this.nums2Count.delete(oldVal);
        }

        this.nums2[index] += val;

        const newVal = this.nums2[index];
        this.nums2Count.set(newVal, (this.nums2Count.get(newVal) || 0) + 1);
    }

    count(tot: number): number {
        let count = 0;
        for (let num of this.nums1) {
            const target = tot - num;
            count += this.nums2Count.get(target) || 0;
        }
        return count;
    }
}

