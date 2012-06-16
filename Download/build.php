<?php
	namespace
	{
		define("BUILDS", "../Builds");
		define("UNCOMPRESSED", BUILDS . "/Uncompressed");
		define("COMPRESSED", BUILDS . "/Compressed");

		$core = array(
			"license" => array(
				"full" => UNCOMPRESSED . "/license.js",
				"min" => UNCOMPRESSED . "/license.js"
			),
			"utils" => array(
				"full" => UNCOMPRESSED . "/utils.js",
				"min" => COMPRESSED . "/utils-min.js"
			),
			"metadata" => array(
				"full" => UNCOMPRESSED . "/metadata.js",
				"min" => COMPRESSED . "/metadata-min.js"
			),
			"raise" => array(
				"full" => UNCOMPRESSED . "/raise.js",
				"min" => COMPRESSED . "/raise-min.js"
			),
			"types" => array(
				"full" => UNCOMPRESSED . "/types.js",
				"min" => COMPRESSED . "/types-min.js"
			),
			"is" => array(
				"full" => UNCOMPRESSED . "/is.js",
				"min" => COMPRESSED . "/is-min.js"
			),
			"helpers" => array(
				"full" => UNCOMPRESSED . "/helpers.js",
				"min" => COMPRESSED . "/helpers-min.js"
			),
			"node" => array(
				"full" => UNCOMPRESSED . "/node.js",
				"min" => COMPRESSED . "/node-min.js"
			),
			"create" => array(
				"full" => UNCOMPRESSED . "/create.js",
				"min" => COMPRESSED . "/create-min.js"
			)
		);

		$optional = array(
			"classes" => array(
				"full" => UNCOMPRESSED . "/classes.js",
				"min" => COMPRESSED . "/classes-min.js"
			),
			"traverse" => array(
				"full" => UNCOMPRESSED . "/traverse.js",
				"min" => COMPRESSED . "/traverse-min.js"
			),
			"select" => array(
				"full" => UNCOMPRESSED . "/select.js",
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

		function fetchMinStatus()
		{
			return array_key_exists(
				"minify_build",
				$_GET
			);
		}

		function determineBuildForm(
			$min
		)
		{
			$min = fetchMinStatus();
			$form = "";
			if ($min) {
				$form = "min";
			} else if (!$min) {
				$form = "full";
			}
			return $form;
		}

		function queueCore(
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
			$core,
			$optional
		)
		{
			$queue = "";
			$queue = queueCore(
				$core,
				$queue
			);
			$queue = queueOptional(
				$optional,
				$queue
			);
			return $queue;
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

		function determineBuildName()
		{
			$min = fetchMinStatus();
			$name = "utils-build";
			if ($min) {
				$name .= "-min";
			}
			$name .= ".js";
			return $name;
		}

		function sendDispositionHeader()
		{
			$name = determineBuildName();
			header("Content-Disposition: attachment;" .
				"filename=" . $name);
		}

		function deliverBuild(
			$build
		)
		{
			sendStatusHeader();
			sendTypeHeader();
			sendLengthHeader($build);
			sendDispositionHeader();
			ob_start("ob_gzhandler");
			echo $build;
		}

		function checkPost(
			$core,
			$optional
		)
		{
			$queue = runQueues(
				$core,
				$optional
			);
			deliverBuild(
				$queue
			);
		}

		checkPost(
			$core,
			$optional
		);
	}
?>
