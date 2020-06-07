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
       i : ''  
       }
       
     },
     methods: {
       next() {
        var j = this.i++
        console.log('j',j)
        this.currentPhoto  = this.photos[j] 
       },
       prev() {
        var j = this.i--
        this.currentPhoto  = this.photos[j] 
       }    
     },
     created() {
         this.i=0
         this.currentPhoto  = this.photos[0]
     }
     
    }
</script>           
            