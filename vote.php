<?php include_once("inc/header.php"); ?>

	<script type="text/javascript">jQuery(function($){Site.init();});</script>

	<!-- Votes made section -->
	<section id="votes_made">
	<?php for($i = 0; $i < 6; $i++): ?>
		<article class="blank"></article>
	<?php endfor; ?>
	</section>
	<!-- End votes made section -->

	<!-- Student photo section -->
	<section id="student_photos">
		<ul>
		<?php for($i = 0; $i < 30; $i++): ?>
			<li>
				<article>
					<a href="#">
						<img src="assets/img/woman.jpg" data-imageid="<?=$i?>" data-columid="1">
					</a>
				</article>
				<div class="photo_hover">
					<div class="frame">
						<div class="like_area">
							<a href="#"></a>
						</div>
					</div>
				</div>
			</li>
		<?php endfor; ?>
		</ul>
	</section>
	<!-- End student photo section -->

<?php include_once("inc/footer.php"); ?>