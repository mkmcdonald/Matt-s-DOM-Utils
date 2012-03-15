if (Utils) {
	(function () {
		var errorTypes = {
			"INDEX_SIZE_ERROR": "The index is not in " +
				"the allowed range.",
			"HEIRARCHY_REQUEST_ERROR": "The operation " +
				"would yield an incorrect node " +
				"tree.",
			"WRONG_DOCUMENT_ERROR": "The object is in " +
				"the wrong document.",
			"INVALID_CHARACTER_ERROR": "The string " +
				"contains invalid characters.",
			"NO_MODIFICATION_ALLOWED_ERROR": "The " +
				"cannot be modified.",
			"NOT_FOUND_ERROR": "The object cannot be " +
				"found here.",
			"NOT_SUPPORTED_ERROR": "The operation is " +
				"not supported.",
			"INVALID_STATE_ERROR": "The object is in " +
				"an invalid state.",
			"SYNTAX_ERROR": "The string did not match " +
				"the expected pattern.",
			"INVALID_MODIFICATION_ERROR": "The object " +
				"can not be modified in this way.",
			"NAMESPACE_ERROR": "The operation is not " +
				"allowed by Namespaces in XML.",
			"INVALID_ACCESS_ERROR": "The object does " +
				"not support the operation or " +
				"argument.",
			"TYPE_MISMATCH_ERROR": "The type of the " +
				"object does not match the " +
				"expected type.",
			"SECURITY_ERROR": "The operation is " +
				"insecure.",
			"NETWORK_ERROR": "A network error " +
				"occurred.",
			"ABORT_ERROR": "The operation was " +
				"aborted.",
			"URL_MISMATCH_ERROR": "The given URL " +
				"does not match another URL.",
			"QUOTA_EXCEEDED_ERROR": "The quota has " +
				"been exceeded.",
			"TIMEOUT_ERROR": "The operation timed " +
				"out.",
			"INVALID_NODE_TYPE_ERROR": "The supplied " +
				"node is incorrect or has an " +
				"incorrect ancestor for this " +
				"operation.",
			"DATA_CLONE_ERROR": "The object can not " +
				"be cloned."
		};

		function throwIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}

		function throwHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}

		function throwWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}

		function throwInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}

		function throwNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}

		function throwNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}

		function throwNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}

		function throwInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}

		function throwSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}

		function throwInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}

		function throwNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}

		function throwInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}

		function throwTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}

		function throwSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}

		function throwNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}

		function throwAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}

		function throwURLMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}

		function throwQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}

		function throwTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}

		function throwInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}

		function throwDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}

		Utils.errors = Utils.errors || {
			"types": errorTypes,
			"throwIndexSize": throwIndexSize,
			"throwHeirarchyRequest":
				throwHeirarchyRequest,
			"throwWrongDocument": throwWrongDocument,
			"throwInvalidCharacter":
				throwInvalidCharacter,
			"throwNoModificationAllowed":
				throwNoModificationAllowed,
			"throwNotFound": throwNotFound,
			"throwNotSupported": throwNotSupported,
			"throwInvalidState": throwInvalidState,
			"throwSyntax": throwSyntax,
			"throwInvalidModification":
				throwInvalidModification,
			"throwNamespace": throwNamespace,
			"throwInvalidAccess": throwInvalidAccess,
			"throwTypeMismatch": throwTypeMismatch,
			"throwSecurity": throwSecurity,
			"throwNetwork": throwNetwork,
			"throwAbort": throwAbort,
			"throwURLMismatch": throwURLMismatch,
			"throwQuotaExceeded": throwQuotaExceeded,
			"throwTimeout": throwTimeout,
			"throwInvalidNodeType":
				throwInvalidNodeType,
			"throwDataClone": throwDataClone
		};
	}());
}
