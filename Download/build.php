<?php
	namespace
	{
		define("LIBRARY", "../Library");
		define("BUILDS", "../Builds");
		define("COMPRESSED", BUILDS . "/Compressed");

		$core = array(
			"utils" => array(
				"full" => LIBRARY . "/utils.js",
				"min" => COMPRESSED . "/utils-min.js"
			),
			"raise" => array(
				"full" => LIBRARY . "/raise.js",
				"min" => COMPRESSED . "/raise-min.js"
			),
			"types" => array(
				"full" => LIBRARY . "/types.js",
				"min" => COMPRESSED . "/types-min.js"
			),
			"is" => array(
				"full" => LIBRARY . "/is.js",
				"min" => COMPRESSED . "/is-min.js"
			),
			"can" => array(
				"full" => LIBRARY . "/can.js",
				"min" => COMPRESSED . "/can-min.js"
			),
			"helpers" => array(
				"full" => LIBRARY . "/helpers.js",
				"min" => COMPRESSED . "/helpers-min.js"
			),
			"node" => array(
				"full" => LIBRARY . "/node.js",
				"min" => COMPRESSED . "/node-min.js"
			),
			"create" => array(
				"full" => LIBRARY . "/create.js",
				"min" => COMPRESSED . "/create-min.js"
			)
		);

		$optional = array(
			"classes" => array(
				"full" => LIBRARY . "/classes.js",
				"min" => COMPRESSED . "/classes-min.js"
			),
			"traverse" => array(
				"full" => LIBRARY . "/traverse.js",
				"min" => COMPRESSED . "/traverse-min.js"
			),
			"select" => array(
				"full" => LIBRARY . "/select.js",
				"min" => COMPRESSED . "/select-min.js"
			)
		);

		function convertFile(
			$file
		)
		{
			return filter_var(
				$file,
				FILTER_UNSAFE_RAW
			);
		}

		function fetchFile(
			$file
		)
		{
			$file = filter_var(
				$file,
				FILTER_SANITIZE_URL
			);
			$fetched = "";
			if (file_exists($file)) {
				$fetched = file_get_contents(
					$file
				);
				$fetched = convertFile(
					$fetched
				);
			}
			return $fetched;
		}

		function determineBuildForm(
			$min
		)
		{
			$form = "";
			if ($min) {
				$form = "min";
			} else if (!$min) {
				$form = "full";
			}
			return $form;
		}

		function queueCore(
			$min,
			$core,
			$queue
		)
		{
			$findIn = determineBuildForm($min);
			$newKey = "";
			$file = "";
			foreach ($core as $key => $value) {
				$newKey = $value[$findIn];
				$file = fetchFile($newKey);
				$queue .= $file;
			}
			return $queue;
		}

		function queueOptional(
			$min,
			$optional,
			$queue
		)
		{
			$found = false;
			$findIn = determineBuildForm($min);
			$newKey = "";
			$file = "";
			foreach ($_GET as $key => $value) {
				$found = array_key_exists(
					$value,
					$optional
				);
				if ($found) {
					$newKey = $optional[$value];
					$file = fetchFile(
						$newKey[$findIn]
					);
					$queue .= $file;
				}
			}
			return $queue;
		}

		function runQueues(
			$min,
			$core,
			$optional
		)
		{
			$queue = "";
			$queue = queueCore(
				$min,
				$core,
				$queue
			);
			$queue = queueOptional(
				$min,
				$optional,
				$queue
			);
			return $queue;
		}

		function encodeBuild(
			$gzip,
			$build
		)
		{
			$data = "Content-Encoding: gzip, deflate";
			if ($gzip) {
				$build = gzencode($build, 9);
				header($data);
			}
			return $build;
		}

		function sendStatusHeader()
		{
			header("HTTP/1.1 200: OK");
		}

		function sendTypeHeader()
		{
			$type = "application/javascript;";
			header("Content-Type: " . $type .
				"charset=utf-8");
		}

		function sendLengthHeader(
			$build
		)
		{
			header("Content-Length: " .
				strlen($build));
		}

		function determineBuildName(
			$min,
			$gzip
		)
		{
			$name = "utils-build";
			if ($min) {
				$name .= "-min";
			}
			if ($gzip) {
				$name .= "-gzip";
			}
			$name .= ".js";
			return $name;
		}

		function sendDispositionHeader(
			$min,
			$gzip
		)
		{
			$name = determineBuildName(
				$min,
				$gzip
			);
			header("Content-Disposition: attachment;" .
				"filename=" . $name);
		}

		function deliverBuild(
			$build,
			$min,
			$gzip
		)
		{
			$build = encodeBuild($gzip, $build);
			sendStatusHeader();
			sendTypeHeader();
			sendLengthHeader($build);
			sendDispositionHeader(
				$min,
				$gzip
			);
			echo $build;
		}

		function fetchMinStatus()
		{
			return array_key_exists(
				"minify_build",
				$_GET
			);
		}

		function fetchGzipStatus()
		{
			return array_key_exists(
				"gzip_build",
				$_GET
			);
		}

		function checkPost(
			$core,
			$optional
		)
		{
			$min = fetchMinStatus();
			$gzip = fetchGzipStatus();
			$queue = runQueues(
				$min,
				$core,
				$optional
			);
			deliverBuild(
				$queue,
				$min,
				$gzip
			);
		}

		checkPost(
			$core,
			$optional
		);
	}
?>
