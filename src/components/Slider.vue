<template> 
    <div class="post__img">
        <div class="slider owl-theme">
            <img :src="currentPhoto" alt="Photo">
        </div>
        <button @click="prev">prev</button>
        <button @click="next">next</button> 
    </div>
</template> 
<script>
    export default {
     props: ['photos'],
     data(){
       return {
         currentPhoto : '',  
       i : 0  
       }
       
     },
     methods: {
       next() {
        //var j = this.i++
       // console.log('j',j)
        this.currentPhoto  = this.photos[this.i++] 
       },
       prev() {
        var j = this.i--
        this.currentPhoto  = this.photos[j] 
       }    
     },
     created() {
         this.i=1
        console.log(this.i)
         this.currentPhoto  = this.photos[0]
     }
     
    }
</script>           
            