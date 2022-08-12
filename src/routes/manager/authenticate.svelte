<div class="content-container">
	<div class="container-inner">
		<h1>Connect a wallet on solana to continue</h1>
		<ul class="container-wallets-adapters">
			<li>
				<button tabindex="0" type="button" class="adapter-button">Phantom <span>Detected</span></button>
			</li>
			<li>
				<button tabindex="0" type="button" class="adapter-button">Solflare <span>Detected</span></button>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.content-container {
		@apply grid place-content-center h-full;
	}
	.container-inner {
		@apply text-custom-dark bg-white rounded-xl max-w-[400px] text-center border-custom-dark border-2;
	}
	h1 {
		@apply px-[48px] pt-[64px] pb-[48px] text-2xl font-[500] leading-[33px];
	}
	.container-wallets-adapters {
		@apply mb-[12px] w-full bg-solana-dark;
	}
	.adapter-button {
		@apply h-[48px] w-full flex items-center text-white px-[24px] text-[18px] hover:bg-[#ffffff];
	}
	.adapter-button span {
		@apply ml-auto opacity-60 text-[14px];
	}
</style>
