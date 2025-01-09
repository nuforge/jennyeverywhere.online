<script setup lang="ts">

defineProps({
  jenny: {
    type: String,
    default: '#161616'
  },
  every: {
    type: String,
    default: 'grey'
  },
  where: {
    type: String,
    default: 'white'
  },
})

</script>

<template>
  <v-sheet class="d-inline-flex overflow-visible bg-transparent ma-1 pa-1">
    <svg width="200" height="54" viewBox="0 0 2042 524" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" :fill="where"
        d="M1872.11 332.5C1860.75 332.5 1851.54 341.713 1851.54 353.077V502.257C1851.54 513.621 1860.75 522.833 1872.11 522.833H2021.29C2032.65 522.833 2041.86 513.621 2041.86 502.257V471.392H2011V491.968C2011 494.81 2008.7 497.113 2005.86 497.113H1897.83C1892.15 497.113 1887.55 492.507 1887.55 486.824V435.383H2041.86V353.077C2041.86 341.713 2032.65 332.5 2021.29 332.5H1872.11ZM1897.83 353.077C1892.15 353.077 1887.55 357.683 1887.55 363.365V414.806H2000.71C2006.4 414.806 2011 410.2 2011 404.518V368.509C2011 359.986 2004.09 353.077 1995.57 353.077H1897.83Z" />
      <path
        d="M1676.65 332.5H1640.64V522.833H1676.65V363.365C1676.65 357.683 1681.25 353.077 1686.93 353.077H1830.96C1830.96 341.713 1821.75 332.5 1815.53 332.5H1692.08C1685.93 332.5 1680.42 335.194 1676.65 339.466V332.5Z"
        :fill="where" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1450.31 332.5C1438.95 332.5 1429.74 341.713 1429.74 353.077V502.257C1429.74 513.621 1438.95 522.833 1450.31 522.833H1599.49C1610.85 522.833 1620.06 513.621 1620.06 502.257V471.392H1589.2V491.968C1589.2 494.81 1586.9 497.113 1584.06 497.113H1476.03C1470.35 497.113 1465.75 492.507 1465.75 486.824V435.383H1620.06V353.077C1620.06 341.713 1610.85 332.5 1599.49 332.5H1450.31ZM1476.03 353.077C1470.35 353.077 1465.75 357.683 1465.75 363.365V414.806H1578.91C1584.6 414.806 1589.2 410.2 1589.2 404.518V368.509C1589.2 359.986 1582.29 353.077 1573.77 353.077H1476.03Z"
        :fill="where" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1218.84 332.5H1254.85V425.095C1254.85 419.412 1259.45 414.806 1265.13 414.806H1388.59C1399.95 414.806 1409.16 424.019 1409.16 435.383V522.833H1373.16V435.383H1254.85V522.833H1218.84V332.5Z"
        :fill="where" />
      <path d="M845.334 332.5H881.342L963.644 522.833H927.637L845.334 332.5Z" :fill="where" />
      <path d="M1049.09 332.5H1013.08L930.781 522.833H966.788L1049.09 332.5Z" :fill="where" />
      <path d="M1013.08 332.5H1049.09L1131.39 522.833H1095.39L1013.08 332.5Z" :fill="where" />
      <path d="M1218.84 332.5H1182.83L1100.53 522.833H1136.54L1218.84 332.5Z" :fill="where" />
      <path
        d="M3.33423 491.5L875.323 490.511C880.85 490.505 885.334 494.984 885.334 500.511V521.5H9.98581C6.20504 521.5 3.33423 517.207 3.33423 511.523V491.5Z"
        :fill="every" />
      <path d="M780.334 269.5H816.342L898.644 459.833H862.637L780.334 269.5Z" :fill="every" />
      <path d="M994.09 269.5H958.083L875.781 459.833H911.788L994.09 269.5Z" :fill="every" />
      <path d="M848.777 521.5L875.637 459.5H911.644L884.784 521.5H848.777Z" :fill="every" />
      <path
        d="M656.61 269.5H620.602V459.833H656.61V300.365C656.61 294.683 661.214 290.077 666.898 290.077H749.2C749.2 278.713 739.987 269.5 733.768 269.5H672.042C665.895 269.5 660.38 272.194 656.61 276.466V269.5Z"
        :fill="every" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M435.91 270.5C424.547 270.5 415.334 279.713 415.334 291.077V440.257C415.334 451.621 424.547 460.833 435.91 460.833H585.083C596.446 460.833 605.659 451.621 605.659 440.257V409.392H574.795V429.968C574.795 432.81 572.491 435.113 569.651 435.113H461.629C455.945 435.113 451.342 430.507 451.342 424.824V373.383H605.659V291.077C605.659 279.713 596.446 270.5 585.083 270.5H435.91ZM461.629 291.077C455.945 291.077 451.342 295.683 451.342 301.365V352.806H564.507C570.191 352.806 574.795 348.2 574.795 342.518V306.509C574.795 297.986 567.887 291.077 559.363 291.077H461.629Z"
        :fill="every" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M241.962 269.5H209.334L280.026 459.833H328.966L399.659 269.5H361.594L303.993 424.587L241.962 269.5Z"
        :fill="every" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M23.9098 269.5C12.5464 269.5 3.33423 278.713 3.33423 290.077V439.257C3.33423 450.621 12.5464 459.833 23.9098 459.833H173.083C184.446 459.833 193.659 450.621 193.659 439.257V408.392H162.795V428.968C162.795 431.81 160.492 434.113 157.651 434.113H49.6293C43.9474 434.113 39.3415 429.507 39.3415 423.824V372.383H193.659V290.077C193.659 278.713 184.446 269.5 173.083 269.5H23.9098ZM49.6293 290.077C43.9474 290.077 39.3415 294.683 39.3415 300.365V351.806H152.507C158.189 351.806 162.795 347.2 162.795 341.518V305.509C162.795 296.986 155.886 290.077 147.363 290.077H49.6293Z"
        :fill="every" />
      <path
        d="M11.735 459.5H875.334L-nan -nanCnan nan nan nan nan nanCnan nan nan nan nan nanC-nan -nan -nan -nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan nan nanCnan nan nan nan -nan -nanL875.334 459.5C-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan -nan -nanC-nan -nan -nan -nan nan nanL3.33423 490.484L11.735 459.5Z"
        :fill="jenny" />
      <path d="M843.359 47.5H879.366L961.668 237.833H925.661L843.359 47.5Z" :fill="jenny" />
      <path d="M1023.4 47.5L924.133 273.842H924.272L915.373 294.419H951.38L960.279 273.842H960.14L1059.4 47.5H1023.4Z"
        :fill="jenny" />
      <path d="M828.891 490.287L914.788 294.419H950.795L864.898 490.287H828.891Z" :fill="jenny" />
      <path
        d="M470.854 47.5H434.846V237.833H470.854V78.3649C470.854 72.6828 475.457 68.0766 481.142 68.0766H578.876C587.399 68.0766 594.307 74.9859 594.307 83.509V237.833H630.315V68.0766C630.315 56.7124 621.102 47.5 614.883 47.5H486.285C480.138 47.5 474.624 50.1943 470.854 54.4661V47.5Z"
        :fill="jenny" />
      <path
        d="M676.61 47.5H640.602V237.833H676.61V78.3649C676.61 72.6828 681.214 68.0766 686.898 68.0766H784.632C793.155 68.0766 800.063 74.9859 800.063 83.509V237.833H836.071V68.0766C836.071 56.7124 826.858 47.5 820.639 47.5H692.042C685.895 47.5 680.38 50.1943 676.61 54.4661V47.5Z"
        :fill="jenny" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M249.666 47.5C238.302 47.5 229.09 56.7124 229.09 68.0766V217.257C229.09 228.621 238.302 237.833 249.666 237.833H398.839C410.202 237.833 419.415 228.621 419.415 217.257V186.392H388.551V206.968C388.551 209.81 386.248 212.113 383.407 212.113H275.385C269.703 212.113 265.098 207.507 265.098 201.824V150.383H419.415V68.0766C419.415 56.7124 410.202 47.5 398.839 47.5H249.666ZM275.385 68.0766C269.703 68.0766 265.098 72.6828 265.098 78.3649V129.806H378.263C383.945 129.806 388.551 125.2 388.551 119.518V83.509C388.551 74.9859 381.642 68.0766 373.12 68.0766H275.385Z"
        :fill="jenny" />
      <path
        d="M182.795 15.9324C182.795 7.40936 189.704 0.5 198.227 0.5H213.659V226.842C213.659 232.525 209.053 237.131 203.371 237.131H43.9098C32.5464 237.131 23.3342 227.918 23.3342 216.554V170.257C23.3342 158.893 32.5464 149.68 43.9098 149.68H59.3415V206.266C59.3415 209.107 61.6445 211.41 64.4854 211.41H177.651C180.492 211.41 182.795 209.107 182.795 206.266V15.9324Z"
        :fill="jenny" />
    </svg>
  </v-sheet>
</template>
