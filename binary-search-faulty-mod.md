# How to How to find out which Minecraft mod (or combination of mods) is causing an issue
- The solution that works 100% of the time is to 'Binary Search' which mod causes an issue, as follows:
1. Disable the first half of mods
2. - If the issue was fixed, that means that there is only **one faulty mod**, and it is **in the first half**.
     
   - If the issue persists, enable the first half of mods and disable the second half.
    
     - If the issue was fixed, that means there is only **one faulty mod**, and it is **in the second half**.
     
     - <details><summary><b>If the issue persists</b></summary>
       <p>
       If the issue persists, it means that <b>a mod in the first half is conflicting with a mod in the second half</b>.  In this case, keep the second half enabled, and binary search which mod is in conflict only in the first half (see step 3). After it has been identified, keep that mod enabled and binary search the conflicting mod in the second half.
       </p>
       </details>
   
3. We started from being suspicious of all mods of being faulty, to only being suspicious of half of them. Now we take the half that has a confirmed faulty mod, and do 'step 1.' on it. Continue until you are only left with one mod!  