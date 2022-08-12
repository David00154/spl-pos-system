<script>
	import '../app.css';
</script>

<section class="content-container">
	<slot />
</section>

<style lang="postcss">
	.content-container {
		--tw-bg-opacity: 1;
		@apply mx-auto
    	/* container */
    	/* flex */
		max-w-[1080px]
		p-4
		rounded-[10px]
		md:h-[735px]
		/* md:flex-row
		flex-col */
		border-2
		border-custom-dark
		text-custom-dark
		bg-white;
		/* bg-custom-dark; */
	}
</style>
