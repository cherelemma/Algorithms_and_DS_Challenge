def partition_lomuto(arr, lo, hi)
    pivot = arr[hi]
    i = lo - 1
    lo.upto(hi) do |j|
        if arr[j] <= pivot
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
        end
    end
    p arr
    i
end

def quicksort_helper(arr, lo, hi)
    return unless lo >= 0 && hi >= 0 && lo < hi
    pivot = partition_lomuto(arr, lo, hi)
    quicksort_helper(arr, lo, pivot - 1)
    quicksort_helper(arr, pivot + 1, hi)
end

def advanced_quicksort(arr)
    quicksort_helper(arr, 0, arr.length - 1)
end

advanced_quicksort([1, 3, 9, 8, 2, 7, 5])
# => 1 3 2 5 9 7 8
#    1 2 3 5 9 7 8
#    1 2 3 5 7 8 9

