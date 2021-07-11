package client

import "fmt"

func wrapError(customMsg string, ogErr error) error {
	return fmt.Errorf("%s : %v", customMsg, ogErr)
}
